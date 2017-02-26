import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard-routing.module';

import { WebBluetoothModule, BrowserWebBluetooth } from '@manekinekko/angular-web-bluetooth';
import { BluetoothService } from './bluetooth.service';

import Components from './components';

import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/user.effects';
import { UserActions } from './user/user.actions';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
    WebBluetoothModule.forRoot({
      enableTracing: false
    }),
    EffectsModule.run(UserEffects),
    SharedModule,
    dashboardRoutes,
  ],
  providers:    [
    UserService,
    UserActions,
    {
      provide: BrowserWebBluetooth, useClass: BluetoothService
    },
  ],
  declarations: [
    DashboardComponent,
    ...Components,
  ]
})
export class DashboardModule { }
