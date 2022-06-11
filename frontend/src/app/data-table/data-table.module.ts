import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDataTableComponent } from './ngx-data-table/ngx-data-table.component';
import { IconModule } from '../icon/icon.module';



@NgModule({
  declarations: [
    NgxDataTableComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    NgxDataTableComponent,
  ],
})
export class DataTableModule { }
