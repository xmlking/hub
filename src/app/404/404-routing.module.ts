import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './404.component';

export const pageNotFoundRoutes = RouterModule.forChild([
  { path: '',
    component: PageNotFoundComponent
  }
]);
