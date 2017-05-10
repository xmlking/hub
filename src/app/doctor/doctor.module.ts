import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { doctorRoutes } from './doctor-routing.module';

import { DoctorComponent } from './doctor.component';
import { Components } from './components';
import { Services } from './services';

@NgModule({
  imports: [
    SharedModule,
    doctorRoutes
  ],
  declarations: [
    DoctorComponent,
    ...Components,
  ],
  providers: [
    ...Services,
  ],
})
export class DoctorModule { }
