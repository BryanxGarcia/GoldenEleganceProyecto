import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    // canActivate: [AuthGuard],
    // canLoad: [AuthGuard]
  },
  {
    path: 'base',
    loadChildren: () => import('./base-admin/base-admin.module').then(m => m.BaseAdminModule),
    // canActivate: [AdminGuard],
    // canLoad: [AdminGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
