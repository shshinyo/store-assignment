import { FormControl } from '@angular/forms';
import { Promotion } from '@shared/utils/interfaces/promotion-form-group.interface';

export interface AddEditServiceFormGroup {
  name: FormControl<string | null>;
  price: FormControl<number | null>;
  desc: FormControl<string | null>;
  promotion: FormControl<Promotion | null>;
  additionalFeesPercentage: FormControl<number | null>;
}
