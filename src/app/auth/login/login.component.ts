import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {Observable} from 'rxjs/Observable';
import {ModalActions} from '../../core/modal/modal.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  isLoggedIn$: Observable<boolean>;
  loginError$: Observable<string>;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private modalActions: ModalActions) {

    // using Function
    this.isLoggedIn$ = store.select<boolean>(s => s.modal.open);
    // nested selection
    // this.isLoggedIn$ = store.select<boolean>('modal', 'open');
    // this.loginError$ = store.select<any>(s => s.modal.open);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      rememberMe: [true],
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
    if ( form.invalid ) { return; }
    // this.store.dispatch(this.authActions.loginUser(form.value));
    localStorage.setItem('id_token', 'ccccc');
    this.store.dispatch(this.modalActions.close('login success'));
  }

  ngOnDestroy() {
    // this.modalActions.cleanAlerts();
    // console.log('LoginComponent ngOnDestroy')
  }

}
