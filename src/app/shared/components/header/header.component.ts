import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from '@ngrx/store';
import {ModalActions} from '../../../core/modal/modal.actions';
import {AppState} from '../../../app.reducers';
import {LoginComponent} from '../../../auth/login/login.component';
import {SignupComponent} from '../../../auth/signup/signup.component';

@Component({
  selector: 'header[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  title = 'Orange';
  isCollapsed: boolean;

  constructor(public router: Router, private store: Store<AppState>, private modalActions: ModalActions) {}

  ngOnInit() {
    this.isCollapsed = true;
  }

  public collapsed(event: any): void {
  }

  public expanded(event: any): void {
  }

  openLogin() {
    this.store.dispatch(this.modalActions.open({cmpType: LoginComponent}));
  }

  openSignup() {
    this.store.dispatch(this.modalActions.open({cmpType: SignupComponent}));
  }

  logOut() {
    // this.store.dispatch(this.authActions.logout());
    localStorage.removeItem('id_token');
    this.router.navigate(['/']);
  }

}
