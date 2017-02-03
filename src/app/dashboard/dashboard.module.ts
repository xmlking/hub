import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard-routing.module';

import Components from './components';

import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/user.effects';
import { UserActions } from './user/user.actions';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
    EffectsModule.run(UserEffects),
    SharedModule,
    dashboardRoutes
  ],
  providers:    [
    UserService,
    UserActions
  ],
  declarations: [
    DashboardComponent,
    ...Components,
  ]
})
export class DashboardModule { }
