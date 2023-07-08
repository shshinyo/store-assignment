import { ClassProperties } from '@shared/helpers/types';
import { TableConfig } from '@shared/utils/models/table-config.model';

export class ServicesListController<T> extends TableConfig<T> {
  public totalPrice: number = 0;

  public constructor(args?: ClassProperties<ServicesListController<T>>) {
    super(args as ClassProperties<ServicesListController<T>>);
    if (args && Object.keys(args).length) {
      Object.assign(this, args);
    }
  }
}

export const enum QUERY {
  INDEX = 'index',
  SIZE = 'size',
  SEARCH = 'search',
}
