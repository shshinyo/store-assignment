import { ClassProperties } from '../../helpers/types';

export class TableConfig<T> {
  public totalLength?: number | undefined = undefined;
  public index: number | undefined = 0;
  public size: number | undefined = 10;
  public search?: any | undefined | null = null;
  public list: T[] = [];
  public pageSizeOptions: number[] = [10, 20, 50, 100];
  public dataLoaded: boolean = false;

  public constructor(args: ClassProperties<TableConfig<T>>) {
    if (args && Object.keys(args).length) {
      Object.assign(this, args);
    }
  }
}
