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

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {Http} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './core/services/in-memory-data.service';
import { environment } from '../environments/environment';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  // return new TranslateHttpLoader(http);
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const forAppModuleDemoEnvOnly: any[] = [];
if (environment.demo) {
  forAppModuleDemoEnvOnly.push(
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true,
      // delay: 500,
      // apiBase: 'api'
    })
  );
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
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    ...forAppModuleDemoEnvOnly,
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
