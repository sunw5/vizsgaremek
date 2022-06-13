import { CustomerEditComponent } from './page/customer-edit/customer-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './page/customer/customer.component';
import { HomeComponent } from './page/home/home.component';
import { OrderComponent } from './page/order/order.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
import { ProductComponent } from './page/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
    path: 'rendelesek',
    component: OrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
