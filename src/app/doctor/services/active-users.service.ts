import {Injectable, NgZone} from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from '../../../environments/environment';
import {ActiveUser} from "../models/active-user";

@Injectable()
export class ActiveUsersService {
  private accountsUrl = environment.API_BASE_URL + '/accounts';
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http, private _ngZone: NgZone) {
  }

  list(): Observable<[ActiveUser]> {
    return this.http.get(this.accountsUrl)
      .map(res => this.toJSON(res) as ActiveUser[])
      .catch(this.handleError);
  }

  get(id: number): Observable<ActiveUser> {
    return this.http.get(`${this.accountsUrl}/${id}`)
      .map(res => this.toJSON(res) as ActiveUser)
      .catch(this.handleError);
  }

  create(name: string): Promise<ActiveUser> {
    return this.http
      .post(this.accountsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleErrorPromise);
  }

  update(user: ActiveUser): Promise<ActiveUser> {
    const url = `${this.accountsUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleErrorPromise);
  }

  delete(id: number): Promise<void> {
    const url = `${this.accountsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleErrorPromise);
  }

  private toJSON(response: Response) {
    if (response.status < 200 || response.status >= 300) {
      throw new Error('Bad response status: ' + response.status);
    }
    return response.json();
  }

  private handleError(errorResponse: Response) {
    let body = errorResponse.json();
    let message = body.message ? body.message : (errorResponse.statusText || 'unknown error');
    return Observable.throw(message);
  }

  private handleErrorPromise(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
