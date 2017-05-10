import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { aboutRoutes } from './about-routing.module';

import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    SharedModule,
    aboutRoutes
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
