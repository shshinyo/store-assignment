import { FormControl } from '@angular/forms';

export interface PromotionFormGroup {
  fromDate: FormControl<Date | null>;
  toDate: FormControl<Date | null>;
  discountPercentage: FormControl<number | null>;
}

export interface Promotion {
  fromDate: Date | null;
  toDate: Date | null;
  discountPercentage: number | null;
}
