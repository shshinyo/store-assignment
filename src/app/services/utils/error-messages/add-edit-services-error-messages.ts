import { ValidatorMessages } from '@shared/helpers/generic-validator';

export const AddEditServicesErrorMessages: ValidatorMessages = {
  name: { required: 'Name is required' },
  price: {
    required: 'Price is required',
    min: 'Price should be grater than 1$',
  },
  fromDate: { required: 'From date is required' },
  toDate: { required: 'To date is required' },
  additionalFeesPercentage: {
    min: 'Additional fees percentage should not be less than 0',
    max: 'Additional fees percentage should not be grater than 100',
  },
};
