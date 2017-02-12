import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from '@ngrx/store';
import {ModalActions} from '../../../core/modal/modal.actions';
import {AppState} from '../../../app.reducers';
import {LoginComponent} from '../../../auth/login/login.component';
import {SignupComponent} from '../../../auth/signup/signup.component';

import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  title = environment.TITLE;
  isCollapsed: boolean;

  constructor(public router: Router, private store: Store<AppState>, private modalActions: ModalActions) {}

  ngOnInit() {
    this.isCollapsed = true;
  }

  openLogin() {
    this.collapseNav();
    this.store.dispatch(this.modalActions.open({cmpType: LoginComponent}));
  }

  openSignup() {
    this.collapseNav();
    this.store.dispatch(this.modalActions.open({cmpType: SignupComponent}));
  }

/* TODO : always close responsive nav after click : make it nice*/
  collapseNav() {
    this.isCollapsed = true;
  }
}
