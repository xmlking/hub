import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { ScrollSpyModule } from 'ng2-scrollspy';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppState, rootReducer } from './app.reducers';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import {TranslateLoader, TranslateModule, TranslateStaticLoader} from 'ng2-translate';
import {Http} from '@angular/http';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ToastyModule.forRoot(),
    ScrollSpyModule.forRoot(),
    Ng2PageScrollModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    AuthModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.provideStore(rootReducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
