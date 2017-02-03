import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {Store} from '@ngrx/store';
import {ModalActions} from '../modal/modal.actions';
import {AppState} from '../../app.reducers';
import {LoginComponent} from '../../auth/login/login.component';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private store: Store<AppState>, private modalActions: ModalActions) {}

  canActivate() {// TODO
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.store.dispatch(this.modalActions.open({cmpType: LoginComponent}));
      return false;
    }
  }
}
