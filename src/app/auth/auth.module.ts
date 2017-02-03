import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import {Http, RequestOptions} from '@angular/http';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => sessionStorage.getItem('token')),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}

@NgModule({
  imports: [SharedModule],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  exports: [LoginComponent, SignupComponent],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  entryComponents: [LoginComponent, SignupComponent]
})
export class AuthModule {
}
