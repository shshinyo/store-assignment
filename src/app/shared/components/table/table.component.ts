import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { ShimmerLoadingComponent } from '../shimmer-loading/shimmer-loading.component';
import { Animations } from '@shared/animations/animations';

@Component({
  standalone: true,
  imports: [CommonModule, ShimmerLoadingComponent],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() public data: any[] = [];

  @Input() public colSpanCount?: number;

  @Input() public dataLoaded?: boolean;

  @Input() public headerClass?: string;

  @Input() public rowClass?: string;

  @Input() public extendable?: boolean = false;

  @Input() public extendableByDefault?: boolean;

  @Output() public onRowClicked = new EventEmitter<any>();

  @ContentChild('headers') public headers: TemplateRef<any> | undefined;

  @ContentChild('row') public row: TemplateRef<any> | undefined;

  @ContentChild('pagination') public pagination: TemplateRef<any> | undefined;

  @ContentChild('noData') public noData: TemplateRef<any> | undefined;

  @ContentChild('extendableArea') public extendableArea:
    | TemplateRef<any>
    | undefined;

  private _expandedRows: number[] = [];

  public get expandedRows(): number[] {
    return this._expandedRows;
  }

  public isExpanded = (i: number): boolean => this.expandedRows.includes(i);

  public onExpandRow = (rowIndex: number, rowData?: any): void => {
    this.onRowClicked.emit(rowData);

    const index: number = this._expandedRows.findIndex(
      (i: number) => i === rowIndex
    );

    index >= 0
      ? this._expandedRows.splice(index, 1)
      : this._expandedRows.push(rowIndex);
  };
}
