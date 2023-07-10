import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  Signal,
  ViewChildren,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Animations } from '@shared/animations/animations';
import { AddEditProductFormGroup } from '../../utils/interfaces/add-edit-product-form-group.interface';
import {
  DisplayErrorMessage,
  GenericValidatorController,
} from '@shared/helpers/generic-validator';
import { AddEditProductErrorMessages } from '../../utils/error-messages/add-edit-product-error-messages';
import { Observable, from, fromEvent, merge } from 'rxjs';
import {
  debounceTime,
  filter,
  finalize,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ButtonColors, ButtonTypes } from '@shared/utils/button-properties';
import { IsEqual } from '@shared/helpers/helper-functions';
import {
  OnSaveChanges,
  SaveChangesDirective,
} from '@shared/directives/save-changes.directive';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { GetProduct } from '../../utils/interfaces/products.interface';
import { CreateEditProductPayload } from '../../utils/interfaces/add-edit-product.interface';
import { Promotion } from '@shared/utils/interfaces/promotion-form-group.interface';

@Component({
  selector: 'create-edit-product',
  templateUrl: './create-edit-product.component.html',
  styleUrls: ['./create-edit-product.component.scss'],
  animations: [Animations],
})
export class CreateEditProductComponent
  extends SaveChangesDirective
  implements OnInit, AfterViewInit, OnSaveChanges
{
  public constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _productsService: ProductsService,
    private readonly _destroyRef: DestroyRef
  ) {
    super();
  }

  @ViewChildren(FormControlName, { read: ElementRef })
  public readonly formInputElements!: ElementRef[];

  public addEditProductForm: FormGroup<AddEditProductFormGroup> =
    this._fb.group({
      imageUrl: [''],
      name: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(1)]],
      desc: [''],
      promotion: [
        {
          fromDate: new Date(),
          toDate: new Date(),
          discountPercentage: 0,
        } as Promotion,
      ],
    });

  public buttonTypes = ButtonTypes;

  public buttonColors = ButtonColors;

  public displayErrorMessages: DisplayErrorMessage = {};

  public prodId: WritableSignal<string | null> = signal(null);

  public editMode: Signal<boolean> = computed(() => !!this.prodId());

  public dataLoaded: WritableSignal<boolean> = signal(false);

  public submitProcess: WritableSignal<boolean> = signal(false);

  public imageUrl: Signal<string> = toSignal(
    this.addEditProductForm
      .get('imageUrl')
      ?.valueChanges.pipe(
        map((val: string | null) => val || '')
      ) as Observable<string>,
    { initialValue: '' as string }
  );

  public totalPriceAfterDesc: Signal<number> = toSignal(
    this.addEditProductForm.valueChanges.pipe(
      map(
        (val) =>
          (val.price || 0) -
          ((val?.promotion?.discountPercentage || 0) / 100) * (val.price || 0)
      )
    ) as Observable<number>,
    { initialValue: 0 }
  );

  private readonly _genericValidator =
    new GenericValidatorController<AddEditProductFormGroup>(
      AddEditProductErrorMessages
    );

  private _cashedFormValues: any = this.addEditProductForm.getRawValue();

  public get formChanges(): boolean {
    return !IsEqual(
      this.addEditProductForm.getRawValue(),
      this._cashedFormValues
    );
  }

  public ngOnInit(): void {
    this._paseProduct();
  }

  public ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(this.addEditProductForm.valueChanges, ...controlBlurs)
      .pipe(
        tap(() => {
          this.displayErrorMessages = this._genericValidator.processMessages(
            this.addEditProductForm
          );
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  public onSubmit = (): void => {
    const payload: CreateEditProductPayload = {
      data: {
        id: this.prodId(),
        name: this.addEditProductForm.value?.name,
        imageUrl: this.addEditProductForm.value?.imageUrl,
        price: this.addEditProductForm.value?.price + '$',
        desc: this.addEditProductForm.value?.desc,
        fromDate: this.addEditProductForm.value.promotion?.fromDate,
        toDate: this.addEditProductForm.value.promotion?.toDate,
        discountPercentage:
          this.addEditProductForm.value.promotion?.discountPercentage + '%',
      },
    } as CreateEditProductPayload;

    this.submitProcess.set(true);

    this.editMode()
      ? this._updateHandler(payload)
      : this._createHandler(payload);
  };

  private _createHandler = (payload: CreateEditProductPayload): void => {
    delete payload.data.id;
    this._productsService
      .createNewProduct({ ...payload })
      .pipe(
        tap(() => {
          this._cashedFormValues = this.addEditProductForm.getRawValue();
        }),
        debounceTime(500),
        switchMap(() => from(this._router.navigate(['/dashboard/products']))),
        finalize(() => this.submitProcess.set(false)),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  };

  private _updateHandler = (payload: CreateEditProductPayload): void => {
    this._productsService
      .updateProduct({ ...payload })
      .pipe(
        tap(() => {
          this._cashedFormValues = this.addEditProductForm.getRawValue();
        }),
        debounceTime(500),
        switchMap(() => from(this._router.navigate(['/dashboard/products']))),
        finalize(() => this.submitProcess.set(false)),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  };

  private _paseProduct = (): void => {
    this._route.paramMap
      .pipe(
        map((param: ParamMap) => {
          const prodId: string | null = param.get('id');
          this.prodId.set(prodId);
          return prodId;
        }),
        filter(Boolean),
        switchMap((prodId: string) =>
          this._productsService.getProduct(Number(prodId))
        ),
        tap((prod: GetProduct) => {
          this._patchFormData(prod);
          this.dataLoaded.set(true);
          this._cashedFormValues = this.addEditProductForm.getRawValue();
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  };

  private _patchFormData = (prod: GetProduct): void => {
    this.addEditProductForm.patchValue({
      ...(prod?.data?.attributes as any),
      price: Number((prod?.data.attributes?.price || '0').replace(/[$]/g, '')),
      promotion: {
        fromDate: (prod?.data?.attributes as any)?.fromDate,
        toDate: (prod?.data?.attributes as any)?.toDate,
        discountPercentage: Number(
          (prod?.data.attributes?.discountPercentage || '0').replace(/[%]/g, '')
        ),
      },
    });
  };
}
