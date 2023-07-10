import {
  Component,
  DestroyRef,
  ElementRef,
  ViewChildren,
  forwardRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  DisplayErrorMessage,
  GenericValidatorController,
} from '@shared/helpers/generic-validator';
import { Observable, fromEvent, merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PromotionErrorMessages } from '../../error-messages/promotion-error-messages';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { PromotionFormGroup } from '@shared/utils/interfaces/promotion-form-group.interface';
import { Animations } from '@shared/animations/animations';

@Component({
  selector:
    'promotion-form-field[formControlName],promotion-form-field[ngModel],promotion-form-field[formControl]',
  templateUrl: './promotion-form-field.component.html',
  styleUrls: ['./promotion-form-field.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PromotionFormFieldComponent),
      multi: true,
    },
  ],
  animations: [Animations],
})
export class PromotionFormFieldComponent implements ControlValueAccessor {
  private readonly _fb: FormBuilder = inject(FormBuilder);

  private readonly _destroyRef: DestroyRef = inject(DestroyRef);

  @ViewChildren(FormControlName, { read: ElementRef })
  public readonly formInputElements!: ElementRef[];

  public promotionFormGroup: FormGroup = this._fb.group({
    fromDate: [new Date(), Validators.required],
    toDate: [new Date(), Validators.required],
    discountPercentage: [0, [Validators.min(0), Validators.max(100)]],
  });

  public displayErrorMessages: DisplayErrorMessage = {};

  private readonly _genericValidator =
    new GenericValidatorController<PromotionFormGroup>(PromotionErrorMessages);

  public ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(this.promotionFormGroup.valueChanges, ...controlBlurs)
      .pipe(
        tap(() => {
          this.displayErrorMessages = this._genericValidator.processMessages(
            this.promotionFormGroup
          );
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  public writeValue = (value: any): void => {
    this.promotionFormGroup?.setValue(value);
  };

  public registerOnChange = (fn: Function): void => {
    this.promotionFormGroup.valueChanges.subscribe((val) => fn(val));
  };

  public registerOnTouched = (fn: Function): void => {
    this.promotionFormGroup.valueChanges.subscribe((val) => fn(val));
  };

  private _resetForm = (): void => this.promotionFormGroup.reset({});
}
