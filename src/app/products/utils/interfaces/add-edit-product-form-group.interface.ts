import { FormControl } from '@angular/forms';

export interface AddEditProductFormGroup {
  name: FormControl<string | null>;
  imageUrl: FormControl<string | null>;
  price: FormControl<number | null>;
  desc: FormControl<string | null>;
  fromDate: FormControl<Date | null>;
  toDate: FormControl<Date | null>;
  discountPercentage: FormControl<number | null>;
}
