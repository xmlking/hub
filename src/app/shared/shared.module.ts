import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

/* Lib */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

/* App */
import Pipes from './pipes';
import Components from './components';


@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [
    ...Components,
    ...Pipes,
  ],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MomentModule,
    Ng2PageScrollModule,
    ...Components,
    ...Pipes,
  ],
})
export class SharedModule {
}
