import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { landingRoutes } from './landing-routing.module';

import { LandingComponent } from './landing.component';

import { Components } from './components';

@NgModule({
  imports: [
    SharedModule,
    landingRoutes,
  ],
  declarations: [
    LandingComponent,
    ...Components,
  ]
})
export class LandingModule { }
