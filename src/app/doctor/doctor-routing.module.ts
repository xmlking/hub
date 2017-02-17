import { Routes, RouterModule } from '@angular/router';
import {DoctorComponent} from './doctor.component';

export const doctorRoutes = RouterModule.forChild([
  {
    path: '', component: DoctorComponent
  }
]);
