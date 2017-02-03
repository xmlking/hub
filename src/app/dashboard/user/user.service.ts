import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const API_BASE_URL = 'ddd';
@Injectable()
export class UserService  {
  constructor(public http: Http) {
  }

  logout(): Observable<string> {
    return this.http.get(`${API_BASE_URL}/logout`)
      .map(res => res.text());
  }
}
