import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {homeRoutes} from './home-routing.module';

import {HomeComponent} from './home.component';
import { Components } from './components';

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
