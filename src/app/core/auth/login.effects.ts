/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { LoginActions } from './login.actions';
import { LoginService } from './login.service';

@Injectable()

export class LoginEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private loginActions: LoginActions
  ) { }

  @Effect() login$ = this.actions$
    .ofType(LoginActions.LOGIN)
    .map(action => action.payload)
    .switchMap(login => this.loginService.login(login)
      .mergeMap((res: any) => Observable.of(
        this.loginActions.loginSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.loginActions.loginFail(err)
      ))
    );

  @Effect() logout$ = this.actions$
    .ofType(LoginActions.LOGOUT)
    .map(action => action.payload)
    .switchMap(() => this.loginService.logout()
      .mergeMap((res: any) => Observable.of(
        this.loginActions.logoutSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.loginActions.logoutFail(err)
      ))
    );
}
