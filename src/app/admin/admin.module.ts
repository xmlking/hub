import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import Components from './components';
import { adminRoutes } from './admin-routing.module';

@NgModule({
  imports: [
    SharedModule,
    adminRoutes
  ],
  declarations: [
    AdminComponent,
    ...Components,
  ]
})
export class AdminModule { }
