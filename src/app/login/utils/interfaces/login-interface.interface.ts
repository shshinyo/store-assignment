import { FormControl } from '@angular/forms';

export interface LoginFormGroup {
  identifier: FormControl<string | null>;
  password: FormControl<string | null>;
}
