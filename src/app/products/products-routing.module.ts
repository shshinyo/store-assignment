import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CreateEditProductComponent } from './components/create-edit-product/create-edit-product.component';
import { SaveChangesGuard } from '../core/guards/save-changes.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'create',
    component: CreateEditProductComponent,
    canDeactivate: [SaveChangesGuard],
  },
  {
    path: 'edit/:id',
    component: CreateEditProductComponent,
    canDeactivate: [SaveChangesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
  public static Components: Array<Type<any> | any[]> = [
    ProductsListComponent,
    CreateEditProductComponent,
  ];
}
