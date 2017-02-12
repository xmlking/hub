import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {HomeComponent} from './home.component';
import Components from './components';
import {homeRoutes} from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    homeRoutes,
  ],
  declarations: [
    HomeComponent,
    ...Components,
  ],
})
export class HomeModule { }
