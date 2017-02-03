import { RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';

export const homeRoutes = RouterModule.forChild([
  {
    path: '', component: HomeComponent, children: [
    {
      path: '',
      loadChildren: './landing/landing.module#LandingModule'
    },
    { path: 'blog',
      loadChildren: './blog/blog.module#BlogModule'
    },
    { path: 'about',
      loadChildren: './about/about.module#AboutModule'
    },
  ],
  }
]);
