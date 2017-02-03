import { PageNotFoundComponent } from './404.component';
import { NgModule } from '@angular/core';
import { pageNotFoundRoutes } from './404-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    pageNotFoundRoutes
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
