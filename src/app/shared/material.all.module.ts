import 'hammerjs';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    MaterialModule,
    FlexLayoutModule
  ]
})
export class MyMaterialModule { }

