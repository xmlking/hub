import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard-routing.module';

// import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';

import Components from './components';

import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/user.effects';
import { UserActions } from './user/user.actions';
import { UserService } from './user/user.service';

import { BluetoothCore } from './services/bluetooth';

@NgModule({
  imports: [
    // WebBluetoothModule.forRoot(),
    EffectsModule.run(UserEffects),
    SharedModule,
    dashboardRoutes
  ],
  providers:    [
    UserService,
    UserActions,
    BluetoothCore,
  ],
  declarations: [
    DashboardComponent,
    ...Components,
  ]
})
export class DashboardModule { }
