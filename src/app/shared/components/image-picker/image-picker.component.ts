import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  forwardRef,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { ButtonColors, ButtonTypes } from '@shared/utils/button-properties';
import { ToastrService } from 'ngx-toastr';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  selector:
    'image-picker[formControlName],image-picker[formControl],image-picker[ngModel]',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImagePickerComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ImagePickerComponent),
      multi: true,
    },
  ],
})
export class ImagePickerComponent implements OnInit {
  public constructor(
    private readonly _fb: FormBuilder,
    private readonly _toastService: ToastrService
  ) {}

  private readonly _destroyRef = inject(DestroyRef);

  @Input() showActions?: boolean = true;

  @Input() showDeleteBtn?: boolean = true;

  @Input() label: string = 'upload';

  @Input() sizeLimit?: number = 5;

  public formControl: FormControl = this._fb.control(null, {
    nonNullable: true,
    validators: Validators.required,
  });

  public readonly ButtonTypes = ButtonTypes;

  public readonly ButtonColors = ButtonColors;

  public image: { file: File | undefined; preview: any } = {
    file: undefined,
    preview: null,
  };

  public ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        tap((file: string | File) => this._readFileAImage(file)),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  public onSelectFile(event: any, files: FileList | null | undefined): void {
    if (files?.length) {
      const file: File = files[0];

      const reader = new FileReader();

      reader.readAsDataURL(event?.target?.files[0]);

      if (file && this.sizeLimit && file.size >= this.sizeLimit * 1000 * 1024) {
        this._toastService.error(
          'File size is out of the range data upload (5MB) maximum'
        );
        return;
      }

      if (!file || !file.type.match(/image\/*/)) {
        this._toastService.error('File type is invalid');
        return;
      }

      reader.onload = (_) => {
        const { result } = reader;
        this.formControl.setValue(file);
        this.formControl.updateValueAndValidity();
      };
    }
  }

  public onResetImage = (): void => {
    this.image = { file: undefined, preview: null };
  };

  public onTouched: () => void = () => {};

  public writeValue(val: unknown): void {
    val && this.formControl.patchValue(val as File, { emitEvent: true });
  }

  public registerOnChange = (fn: () => void): void => {
    this.formControl.valueChanges.subscribe(fn);
  };

  public registerOnTouched = (fn: () => void) => (this.onTouched = fn);

  public setDisabledState? = (isDisabled: boolean): void => {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  };

  public validate = (): ValidationErrors | null => {
    return this.formControl.valid
      ? null
      : {
          invalidForm: {
            valid: false,
            message: 'Form fields are invalid',
          },
        };
  };

  private _readFileAImage = (file: File | string) => {
    const reader = new FileReader();

    if (file instanceof File) {
      reader.readAsDataURL(file);

      reader.onload = (_) => {
        const { result } = reader;
        this.image = { file: file, preview: result };
      };
    } else this.image = { file: undefined, preview: file };
    this.formControl.setValue(file as File);
    this.formControl.updateValueAndValidity();
  };
}
