import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { Home, Edit, Edit2, Edit3, Archive, ShoppingCart, Trash } from 'angular-feather/icons';

const icons = {
  Home,
  ShoppingCart,
  Edit2,
  Edit3,
  Edit,
  Archive,
  Trash,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
  ],
  exports: [
    FeatherModule,
  ],
})
export class IconModule { }
