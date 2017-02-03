import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


export const dashboardRoutes = RouterModule.forChild([
  {
    path: '',
    component: DashboardComponent
  }
]);
