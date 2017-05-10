import { Routes, RouterModule } from '@angular/router';
import {MaterialComponent} from './material.component'

const routes: Routes = [];

export const materialRoutes = RouterModule.forChild([
  { path: '',
    component: MaterialComponent
  }
]);




