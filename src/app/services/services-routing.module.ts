import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveChangesGuard } from '../core/guards/save-changes.guard';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { CreateEditServiceComponent } from './components/create-edit-service/create-edit-service.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesListComponent,
  },
  {
    path: 'create',
    component: CreateEditServiceComponent,
    canDeactivate: [SaveChangesGuard],
  },
  {
    path: 'edit/:id',
    component: CreateEditServiceComponent,
    canDeactivate: [SaveChangesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {
  public static Components: Array<Type<any> | any[]> = [
    ServicesListComponent,
    CreateEditServiceComponent,
  ];
}
