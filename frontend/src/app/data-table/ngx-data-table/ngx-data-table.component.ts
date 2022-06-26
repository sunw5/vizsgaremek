import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface INgxTableColumn {
  title: string;
  key: string;
}

@Component({
  selector: 'ngx-data-table',
  templateUrl: './ngx-data-table.component.html',
  styleUrls: ['./ngx-data-table.component.scss'],
})
export class NgxDataTableComponent<T extends { [x: string]: any }>
  implements OnInit
{
  @Input() name: string = '';
  @Input() list: T[] = [];
  @Input() columns: INgxTableColumn[] = [];
  @Output() selectOne: EventEmitter<T> = new EventEmitter<T>();
  @Output() deleteOne: EventEmitter<T> = new EventEmitter<T>();
  @Output() createOne = new EventEmitter();

  // filter pipe params
  keys: string[] = [];
  phrase: string = '';
  filterKey: string = '';

  flattenedList: T[] = [];

  pageSize: number = 10;
  startSlice: number = 0;
  endSlice: number = 10;
  page: number = 1;

  get pageList(): number[] {
    const pageSize = Math.ceil(this.list.length / this.pageSize);
    return new Array(pageSize).fill(1).map((item, index) => index + 1);
  }

  constructor() {}

  ngOnInit(): void {
    this.keys = this.columns.map((column) => column.key);
    // todo avoid mutating the original list
    this.flattenedList = this.list.map((item) => {
      for (const key in item) {
        // convert boolean to "igen" or "nem"
        if (typeof item[key] === 'boolean') {
          item[key] = item[key] ? ('igen' as any) : 'nem';
        }
        // if item.key is object, flatten it
        if (item[key] && typeof item[key] === 'object') {
          let merged: any = '';
          for (const subKey in item[key]) {
            merged += `${item[key][subKey]} `;
          }
          merged.trimEnd();
          item[key] = merged;
        }
      }
      return item;
    });
  }

  onSelect(entity: T): void {
    this.selectOne.emit(entity);
  }

  onDelete(entity: T): void {
    this.deleteOne.emit(entity);
  }

  onCreate(): void {
    this.createOne.emit();
  }

  jumpToPage(pageNum: number): void {
    this.page = pageNum;
    this.startSlice = this.pageSize * (pageNum - 1);
    this.endSlice = this.startSlice + this.pageSize;
  }
}
