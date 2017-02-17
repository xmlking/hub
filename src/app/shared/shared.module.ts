import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

/* Lib */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {TranslateModule} from 'ng2-translate';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule } from '@swimlane/ngx-charts';

/* App */
import Pipes from './pipes';
import Components from './components';
import {ScrollSpyModule} from 'ng2-scrollspy';


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
    TranslateModule,
    MomentModule,
    Ng2PageScrollModule,
    ScrollSpyModule,
    NgxChartsModule,
    NgxDatatableModule,
    ...Components,
    ...Pipes,
  ],
})
export class SharedModule {
}
