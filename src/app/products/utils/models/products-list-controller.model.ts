import { ClassProperties } from '@shared/helpers/types';
import { TableConfig } from '@shared/utils/models/table-config.model';

export class ProductListController<T> extends TableConfig<T> {
  public constructor(args?: ClassProperties<ProductListController<T>>) {
    super(args as ClassProperties<ProductListController<T>>);
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
