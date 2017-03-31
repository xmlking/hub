import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LandingComponent } from './landing.component';
import { landingRoutes } from './landing-routing.module';
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
