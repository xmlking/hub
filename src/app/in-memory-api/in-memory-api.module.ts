import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';

@NgModule({
  imports: [
    CommonModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true,
      // delay: 500,
      // apiBase: 'api'
    }),
  ],
  exports: [ InMemoryWebApiModule ]
})
export class InMemoryApiModule { }
