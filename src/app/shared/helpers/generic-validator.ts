import { AbstractControl, FormGroup } from '@angular/forms';

// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.
export class GenericValidatorController<
  FormGroupType extends {
    [K in keyof FormGroupType]: AbstractControl<any, any>;
  }
> {
  public constructor(private validationMessages: ValidatorMessages) {}

  public processMessages = (
    container: FormGroup<FormGroupType>
  ): DisplayErrorMessage => {
    const messages: DisplayErrorMessage = {};

    for (const controlKey in container.controls) {
      if (container.controls.hasOwnProperty(controlKey)) {
        const c: AbstractControl = container.controls[controlKey];

        if (c instanceof FormGroup) {
          const childMessages = this.processMessages(c);
          Object.assign(messages, childMessages);
        } else {
          if (this.validationMessages[controlKey]) {
            messages[controlKey] = '';

            if ((c.dirty || c.touched) && c.errors) {
              Object.keys(c.errors).map((messageKey) => {
                if (this.validationMessages[controlKey][messageKey])
                  messages[controlKey] +=
                    this.validationMessages[controlKey][messageKey] + ' ';
              });
            }
          }
        }
      }
    }

    return messages;
  };
}

export interface ValidatorMessages {
  [key: string]: { [key: string]: string };
}

export interface DisplayErrorMessage {
  [key: string]: string;
}
