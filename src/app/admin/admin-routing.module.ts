import { Routes, RouterModule } from '@angular/router';

import {AdminComponent} from './admin.component';


export const adminRoutes = RouterModule.forChild([
  {
    path: '', component: AdminComponent
  }
]);

