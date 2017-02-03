import {Injectable, NgZone} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { environment } from '../../../environments/environment';

export class NewBalance {
  sender: string;
  balance: number;
  action: string;
  lastUpdated: Date;
  constructor(sender: string, balance: number, action: string, lastUpdated: Date) {
    this.sender = sender;
    this.balance = balance;
    this.action = action;
    this.lastUpdated = lastUpdated;
  }
}

@Injectable()
export class VitalSignsService {
  private _account: string;

  public newBalance$: Observable<NewBalance>;

  constructor(private http: Http, private _ngZone: NgZone) {

    this.newBalance$ = Observable.create(observer  => {
      observer.next(this.eventToNewBalance({sender: 'qq', balance: 44,  action: 1, lastUpdated: 1485724476}));
      return () => {
        console.log('newBalance$ Cleanup performed!');
      };
    }).share();

  }

  set account(newValue) {
    this._account = newValue;
    localStorage.setItem('account', newValue);
  }
  get account() { return this._account; }

  private eventToNewBalance(event): NewBalance {
    function toAction(action): string {
      switch (action) {
        case 0:
          return 'Steps';
        case 1:
          return 'Visits';
        case 2:
          return 'BMI';
      }
    }
    return new NewBalance(
      event.sender,
      event.balance,
      toAction(event.action),
      new Date(event.lastUpdated * 1000));
  }

  getAllAccounts() {
    return [
      {balance: 101, steps: 342, visits: 3, bmi: 23 },
      {balance: 201, steps: 4333, visits: 2, bmi: 21 },
      {balance: 243, steps: 4433, visits: 1, bmi: 22 },
      {balance: 300, steps: 6754, visits: 3, bmi: 30 },
      {balance: 321, steps: 556, visits: 2, bmi: 31 },
    ];
  }

  unlockAccount(password: string): Observable<string> {
    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  transfer(toAddress: string, fromAddress: string, amount: number): Observable<string> {
    return Observable.create((observer: Observer<boolean>)  => {
      observer.next(true);
      observer.complete();
    });
  }

  getBalance(address = this.account): number {
    return 67;
  }



  getBalanceHistory(address = this.account): Observable<NewBalance> {
    return Observable.create((observer: Observer<number>) => {
      observer.next(45);
      observer.complete();
    });
  }

  addSteps(steps: number): Observable<string> {
    return Observable.create((observer: Observer<number>) => {
      observer.next(65);
      observer.complete();
    });
  }

  addGymVisits(visits: number): Observable<string> {
    return Observable.create((observer: Observer<number>) => {
      observer.next(75);
      observer.complete();
    });
  }

  setBMI(bmi: number): Observable<string> {
    return Observable.create((observer: Observer<number>) => {
      observer.next(86);
      observer.complete();
    });
  }



}
