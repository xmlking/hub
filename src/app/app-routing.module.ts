import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},

  { path : 'about', loadChildren : './home/about/about.module#AboutModule' },
  { path: 'home',       loadChildren: './home/home.module#HomeModule' },
  { path: 'dashboard',  loadChildren: './dashboard/dashboard.module#DashboardModule'},
  // { path: 'admin',      loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard] },
  { path: 'admin',      loadChildren: './admin/admin.module#AdminModule' },
  { path: '404',        loadChildren: './404/404.module#PageNotFoundModule'},
  //
  // 404 should be last
  { path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
