import { FormControl } from '@angular/forms';
import { Promotion } from '@shared/utils/interfaces/promotion-form-group.interface';

export interface AddEditProductFormGroup {
  name: FormControl<string | null>;
  imageUrl: FormControl<string | null>;
  price: FormControl<number | null>;
  desc: FormControl<string | null>;
  promotion: FormControl<Promotion | null>;
}
