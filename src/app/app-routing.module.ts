import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActivateLoginGuard } from './core/guards/activate-login.guard';
import { AuthGuard } from './core/guards/auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './pages/forbidden.component';
import { NotFoundComponent } from './pages/not-found.component';
import { LayoutSideNavComponent } from './layout/side-nav/side-nav.component';
import { LayoutContainerComponent } from './layout/container/container.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ActivateLoginGuard],
    title: 'Login',
  },
  {
    path: 'dashboard',
    component: LayoutContainerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
        title: 'Products',
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.module').then((m) => m.ServicesModule),
        title: 'Services',
      },
      {
        path: '**',
        component: NotFoundComponent,
        title: 'Not found page',
      },
    ],
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
    title: 'Access forbidden',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not found page',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  public static Components: Array<Type<any> | any[]> = [
    AppComponent,
    LoginComponent,
    LayoutContainerComponent,
    LayoutSideNavComponent,
    ForbiddenComponent,
    NotFoundComponent,
  ];
}
