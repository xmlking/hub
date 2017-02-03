import {Injectable, NgZone} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';


@Injectable()
export class AccountService {


  private _account = 'sumo';

  constructor(private http: Http, private _ngZone: NgZone) {
  }

  get account() {
    return this._account;
  }

  getAllAccounts() {
    return ['sumo', 'demo'];
  }

  unlockAccount(account: string, password: string): Observable<string> {
    return Observable.create(observer => {
     //
    }).do(() => {
      this._account = account;
      localStorage.setItem('account', account);
    });
  }

  transfer(toAddress: string, fromAddress: string, amount: number): Observable<string> {
    return Observable.create(observer => {
    });
  }

}
