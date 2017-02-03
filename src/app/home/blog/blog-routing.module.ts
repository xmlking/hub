import {RouterModule} from '@angular/router';
import {BlogComponent} from './blog.component';
export const blogRoutes = RouterModule.forChild([
  { path: '', component: BlogComponent},
]);
