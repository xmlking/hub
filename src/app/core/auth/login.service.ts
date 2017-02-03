import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const API_BASE_URL = 'ddd';
@Injectable()
export class LoginService  {
  constructor(public http: Http) {
  }

  login(login): Observable<string> {
    return this.http.post(`${API_BASE_URL}/login`, login )
      .map(res => res.text());
  }

  logout(): Observable<string> {
    return this.http.get(`${API_BASE_URL}/logout`)
      .map(res => res.text());
  }

}
