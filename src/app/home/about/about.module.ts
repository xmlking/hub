import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AboutComponent } from './about.component';
import { aboutRoutes } from './about-routing.module';

@NgModule({
  imports: [
    SharedModule,
    aboutRoutes
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
