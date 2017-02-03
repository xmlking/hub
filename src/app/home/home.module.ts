import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {HomeComponent} from './home.component';
import Components from './components';
import {homeRoutes} from './home-routing.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    SharedModule,
    homeRoutes,
  ],
  declarations: [
    HomeComponent,
    ...Components,
    FooterComponent,
  ],
})
export class HomeModule { }
