import { CustomerEditComponent } from './page/customer-edit/customer-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './page/customer/customer.component';
import { HomeComponent } from './page/home/home.component';
import { OrderComponent } from './page/order/order.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
import { ProductComponent } from './page/product/product.component';
import { LoginComponent } from './page/login/login.component';
import { OrderEditComponent } from './page/order-edit/order-edit.component';
import { BillComponent } from './page/bill/bill.component';
import { BillEditComponent } from './page/bill-edit/bill-edit.component';
import { AddressComponent } from './page/address/address.component';
import { AddressEditComponent } from './page/address-edit/address-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'termekek',
    component: ProductComponent,
  },
  {
    path: 'termek-szerkesztes/:id',
    component: ProductEditComponent,
  },
  {
    path: 'vasarlok',
    component: CustomerComponent,
  },
  {
    path: 'vasarlo-szerkesztes/:id',
    component: CustomerEditComponent,
  },
  {
    path: 'cimek',
    component: AddressComponent,
  },
  {
    path: 'cim-szerkesztes/:id',
    component: AddressEditComponent,
  },
  {
    path: 'rendelesek',
    component: OrderComponent,
  },
  {
    path: 'rendeles-szerkesztes/:id',
    component: OrderEditComponent,
  },
  {
    path: 'szamlak',
    component: BillComponent,
  },
  {
    path: 'szamla-szerkesztes/:id',
    component: BillEditComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
