import { FormControl } from '@angular/forms';

export interface AddEditServiceFormGroup {
  name: FormControl<string | null>;
  price: FormControl<number | null>;
  desc: FormControl<string | null>;
  fromDate: FormControl<Date | null>;
  toDate: FormControl<Date | null>;
  discountPercentage: FormControl<number | null>;
  additionalFeesPercentage: FormControl<number | null>;
}
