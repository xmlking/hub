import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

/* Lib */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ScrollSpyModule} from 'ng2-scrollspy';

/* App */
import Pipes from './pipes';
import Components from './components';
import {InMemoryApiModule} from '../in-memory-api/in-memory-api.module';
import {environment} from '../../environments/environment';

const demoOnly: any[] = [];
if (environment.demo) {
  demoOnly.push(InMemoryApiModule);
}

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
    ...demoOnly,
    ...Components,
    ...Pipes,
  ],
})
export class SharedModule {
}
