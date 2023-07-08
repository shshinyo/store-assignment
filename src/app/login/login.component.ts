import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonTypes, ButtonColors } from '../shared/utils/button-properties';
import { LoginFormGroup } from './utils/interfaces/login-interface.interface';
import { finalize, take, tap } from 'rxjs/operators';
import { AuthService } from '../core/auth/auth-service.service';
import { IUserPayload } from '../core/utils/user.model';
import {
  DisplayErrorMessage,
  GenericValidatorController,
} from '@shared/helpers/generic-validator';
import { LoginFormErrorMessages } from './utils/models/login-form-error-messages.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, fromEvent, merge } from 'rxjs';
import { LoginResponse } from '../core/utils/login-user.interface';
import { Animations } from '@shared/animations/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [Animations],
})
export class LoginComponent implements AfterViewInit {
  public constructor(
    private readonly _router: Router,
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _destroyRef: DestroyRef
  ) {}
  @ViewChildren(FormControlName, { read: ElementRef })
  public readonly formInputElements!: ElementRef[];

  public loginForm: FormGroup<LoginFormGroup> = this._fb.group({
    identifier: [
      '',
      [
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.required,
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  private readonly _genericValidator =
    new GenericValidatorController<LoginFormGroup>(LoginFormErrorMessages);

  public readonly ButtonTypes = ButtonTypes;

  public readonly ButtonColors = ButtonColors;

  public displayErrorMessages: DisplayErrorMessage = {};

  public loginSubmit = false;

  public ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(this.loginForm.valueChanges, ...controlBlurs)
      .pipe(
        tap(() => {
          this.displayErrorMessages = this._genericValidator.processMessages(
            this.loginForm
          );
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  public onSubmitLogin = (): void => {
    if (this.loginForm.valid) {
      this.loginSubmit = true;
      this._authService
        .login({
          identifier: this.loginForm.value?.identifier as string,
          password: this.loginForm.value?.password as string,
        } as IUserPayload)
        .pipe(
          finalize(() => (this.loginSubmit = false)),
          take(1)
        )
        .subscribe({
          next: (res: LoginResponse) => {
            this._router.navigate(['/dashboard']);
          },
        });
    }
  };
}
