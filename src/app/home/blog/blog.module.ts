import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { blogRoutes } from './blog-routing.module';

import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    SharedModule,
    blogRoutes
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
