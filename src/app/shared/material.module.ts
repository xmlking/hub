import {NgModule} from '@angular/core';
import 'hammerjs';
// import { FlexLayoutModule } from '@angular/flex-layout';
const material = [
  MdCoreModule,
  MdCardModule,
  MdListModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCheckboxModule,
  MdInputModule,
  MdRadioModule,
  MdSelectModule,
  MdSlideToggleModule,
  MdGridListModule,
  MdIconModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdSidenavModule,
  MdSliderModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
]
import {
  MdCoreModule,
  MdCardModule,
  MdListModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCheckboxModule,
  MdInputModule,
  MdRadioModule,
  MdSelectModule,
  MdSlideToggleModule,
  MdGridListModule,
  MdIconModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdSidenavModule,
  MdSliderModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';

@NgModule({
  imports: material,
  exports: material,
})
export class MyMaterialModule {
}
