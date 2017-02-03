import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';
import {Login} from './login.model';

@Injectable()
export class LoginActions {
  /* tslint:disable: member-ordering */
  static LOGIN = '[User] Login';
  static login(login: Login): Action {
    return {
      type: LoginActions.LOGIN,
      payload: login
    };
  }

  static LOGIN_FAIL = '[User] Login Fail';
  loginFail(err: Error): Action {
    return {
      type: LoginActions.LOGIN_FAIL,
      payload: err
    };
  }

  static LOGIN_SUCCESS = '[User] Login Success';
  loginSuccess(res: Response): Action {
    return {
      type: LoginActions.LOGIN_SUCCESS,
      payload: res
    };
  }

  static LOGOUT = '[User] Logout';
  logout(): Action {
    return {
      type: LoginActions.LOGOUT
    };
  }

  static LOGOUT_FAIL = '[User] Logout Fail';
  logoutFail(err: Error): Action {
    return {
      type: LoginActions.LOGOUT_FAIL,
      payload: err
    };
  }

  static LOGOUT_SUCCESS = '[User] Logout Success';
  logoutSuccess(res: Response): Action {
    return {
      type: LoginActions.LOGOUT_SUCCESS,
      payload: res
    };
  }
}
