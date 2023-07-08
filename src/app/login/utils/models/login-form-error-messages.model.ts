import { ValidatorMessages } from '@shared/helpers/generic-validator';

export const LoginFormErrorMessages: ValidatorMessages = {
  identifier: {
    required: 'This field is required',
    pattern: 'This email is not valid email format',
  },
  password: {
    required: 'This field is required',
    minlength: 'Password should be grater than 4 digit or character',
  },
};
