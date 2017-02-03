import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {LoginComponent} from '../../../../auth/login/login.component';
import {SignupComponent} from '../../../../auth/signup/signup.component';
import {AppState} from '../../../../app.reducers';
import {ModalActions} from '../../../../core/modal/modal.actions';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  constructor(private store: Store<AppState>, private modalActions: ModalActions) {
  }
  ngOnInit() {
  }
  openLogin() {
    this.store.dispatch(this.modalActions.open({cmpType: LoginComponent}));
  }

  openSignup() {
    // this.modal.open(SignupComponent);
    this.store.dispatch(this.modalActions.open({cmpType: SignupComponent}));
  }
}
