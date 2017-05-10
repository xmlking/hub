import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { MyMaterialModule } from '../shared/material.module';
import { materialRoutes } from './material-routing.module';

import {MaterialComponent} from './material.component'

@NgModule({
  imports: [
    MyMaterialModule,
    SharedModule,
    materialRoutes,
  ],
  declarations: [MaterialComponent]
})
export class MaterialModule { }
