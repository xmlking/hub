import {Component, OnInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {ModalActions} from '../../core/modal/modal.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  submitted = false;
  isLoggedIn$: Observable<boolean>;
  signUpError$: Observable<string>;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private modalActions: ModalActions, public router: Router) {
    // this.isLoggedIn$ = store.select(s => s.modal.open);
    // this.signUpError$ = store.select(s => s.modal.open);
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // this.isLoggedIn$.filter(isLoggedIn => !!isLoggedIn).subscribe(_ => this.store.dispatch(this.modalActions.close('login success')));

  }

  dismiss(reason?: string) {
    this.store.dispatch(this.modalActions.dismiss(reason));
  }

  close(reason?: string) {
    this.store.dispatch(this.modalActions.close(reason));
  }

  submit( form: FormGroup ) {
    this.submitted = true;
    if ( form.invalid ) {return; }
    // this.store.dispatch(this.authActions.signupUser(form.value));
    localStorage.setItem('id_token', 'ccccc');
    this.store.dispatch(this.modalActions.close('Sign Up success'));
  }

  ngOnDestroy() {
    // this.modalActions.cleanAlerts();
  }

}
