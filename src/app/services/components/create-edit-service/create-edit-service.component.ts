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
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Animations } from '@shared/animations/animations';
import {
  SaveChangesDirective,
  OnSaveChanges,
} from '@shared/directives/save-changes.directive';
import { AddEditServiceFormGroup } from '../../utils/interfaces/add-edit-service-form-group.interface';
import { ButtonColors, ButtonTypes } from '@shared/utils/button-properties';
import {
  DisplayErrorMessage,
  GenericValidatorController,
} from '@shared/helpers/generic-validator';
import { IsEqual } from '@shared/helpers/helper-functions';
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
import { ServicesService } from '../../services/services.service';
import { GetService } from '../../utils/interfaces/services.interface';
import { CreateEditServicePayload } from '../../utils/interfaces/add-edit-service.interface';
import { AddEditServicesErrorMessages } from '../../utils/error-messages/add-edit-services-error-messages';
import { Promotion } from '@shared/utils/interfaces/promotion-form-group.interface';

@Component({
  selector: 'app-create-edit-service',
  templateUrl: './create-edit-service.component.html',
  styleUrls: ['./create-edit-service.component.scss'],
  animations: [Animations],
})
export class CreateEditServiceComponent
  extends SaveChangesDirective
  implements OnInit, AfterViewInit, OnSaveChanges
{
  public constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _destroyRef: DestroyRef,
    private readonly _servicesService: ServicesService
  ) {
    super();
  }

  @ViewChildren(FormControlName, { read: ElementRef })
  public readonly formInputElements!: ElementRef[];

  public addEditServiceForm: FormGroup<AddEditServiceFormGroup> =
    this._fb.group({
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
      additionalFeesPercentage: [0, [Validators.min(0), Validators.max(100)]],
    });

  public serviceId: WritableSignal<string | null> = signal(null);

  public editMode: Signal<boolean> = computed(() => !!this.serviceId());

  public dataLoaded: WritableSignal<boolean> = signal(false);

  public submitProcess: WritableSignal<boolean> = signal(false);

  public totalPriceAfterDesc: Signal<number> = toSignal(
    this.addEditServiceForm.valueChanges.pipe(
      map(
        (val) =>
          (val.price || 0) -
          (((val?.promotion?.discountPercentage || 0) +
            (val.additionalFeesPercentage || 0)) /
            100) *
            (val.price || 0)
      )
    ) as Observable<number>,
    { initialValue: 0 }
  );

  public buttonTypes = ButtonTypes;

  public buttonColors = ButtonColors;

  public displayErrorMessages: DisplayErrorMessage = {};

  private readonly _genericValidator =
    new GenericValidatorController<AddEditServiceFormGroup>(
      AddEditServicesErrorMessages
    );

  private _cashedFormValues: any = this.addEditServiceForm.getRawValue();

  public get formChanges(): boolean {
    return !IsEqual(
      this.addEditServiceForm.getRawValue(),
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

    merge(this.addEditServiceForm.valueChanges, ...controlBlurs)
      .pipe(
        tap(() => {
          this.displayErrorMessages = this._genericValidator.processMessages(
            this.addEditServiceForm
          );
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  public onSubmit = (): void => {
    const payload: CreateEditServicePayload = {
      data: {
        id: this.serviceId(),
        name: this.addEditServiceForm.value?.name,
        fromDate: this.addEditServiceForm.value.promotion?.fromDate,
        toDate: this.addEditServiceForm.value.promotion?.toDate,
        desc: this.addEditServiceForm.value?.desc,
        price: this.addEditServiceForm.value?.price + '$',
        discountPercentage:
          this.addEditServiceForm.value.promotion?.discountPercentage + '%',
        additionalFeesPercentege:
          this.addEditServiceForm.value?.additionalFeesPercentage + '%',
      },
    } as CreateEditServicePayload;
    this.submitProcess.set(true);
    this.editMode()
      ? this._updateHandler(payload)
      : this._createHandler(payload);
  };

  private _createHandler = (payload: CreateEditServicePayload): void => {
    delete payload.data.id;
    this._servicesService
      .createNewService({ ...payload })
      .pipe(
        tap(() => {
          this._cashedFormValues = this.addEditServiceForm.getRawValue();
        }),
        debounceTime(500),
        switchMap(() => from(this._router.navigate(['/dashboard/services']))),
        finalize(() => this.submitProcess.set(false)),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  };

  private _updateHandler = (payload: CreateEditServicePayload): void => {
    this._servicesService
      .updateService({ ...payload })
      .pipe(
        tap(() => {
          this._cashedFormValues = this.addEditServiceForm.getRawValue();
        }),
        debounceTime(500),
        switchMap(() => from(this._router.navigate(['/dashboard/services']))),
        finalize(() => this.submitProcess.set(false)),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  };

  private _paseProduct = (): void => {
    this._route.paramMap
      .pipe(
        map((param: ParamMap) => {
          const serviceId: string | null = param.get('id');
          this.serviceId.set(serviceId);
          return serviceId;
        }),
        filter(Boolean),
        switchMap((prodId: string) =>
          this._servicesService.getService(Number(prodId))
        ),
        tap((service: GetService) => {
          this._patchFormData(service);

          this.dataLoaded.set(true);
          this._cashedFormValues = this.addEditServiceForm.getRawValue();
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  };

  private _patchFormData = (service: GetService): void => {
    this.addEditServiceForm.patchValue({
      ...(service?.data?.attributes as any),
      price: Number(
        (service?.data?.attributes?.price || '0').replace(/[$]/g, '')
      ),
      promotion: {
        fromDate: service?.data?.attributes?.fromDate,
        toDate: service?.data?.attributes?.toDate,
        discountPercentage: Number(
          (service?.data.attributes?.discountPercentage || '0').replace(
            /[%]/g,
            ''
          )
        ),
      },
      additionalFeesPercentage: Number(
        (service?.data?.attributes?.additionalFeesPercentege || '0').replace(
          /[%]/g,
          ''
        )
      ),
    });
  };
}
