import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {JwtHelper, AuthHttp, tokenNotExpired} from 'angular2-jwt';
import 'rxjs/add/operator/map';


@Injectable()

export class AuthService {
  private baseUrl = 'http://localhost:5000/api/auth/';
  private _headers: Headers = new Headers();
  _jwtHelper: JwtHelper = new JwtHelper();

  constructor(private _http: Http,
              private _authHttp: AuthHttp) {
    this._headers.append('Content-Type', 'application/json');
  }

  // Auth methods
  //////////////////////

  login(credentials: any) {
    return this._http
      .post(this.getUrl('login'), JSON.stringify(credentials), {headers: this._headers})
      .map(res => res.json());
  }

  activate(code: any) {
    return this._http
      .post(this.getUrl('activation'), JSON.stringify(code), {headers: this._headers})
      .map(res => res.json());
  }

  sendActivation(email: any) {
    return this._http
      .post(this.getUrl('sendactivation'), JSON.stringify(email), {headers: this._headers})
      .map(res => res.json());
  }

  logout() {
    const id = 'aaa';
    // this._userService.getCurrentUser()._id;

    this._authHttp.get(this.getUrl('logout/' + id + '/null'))
      .subscribe(() => {
        localStorage.removeItem('id_token');
        localStorage.removeItem('currentUser');
      });
  }

  closeSession(sessionId: string) {
    const userId = 'aaa';
    // this._userService.getCurrentUser()._id;
    return this._authHttp
      .get(this.getUrl('logout/' + userId + '/' + sessionId))
      .map(res => res.json());
  }

  forgot(email: any) {
    return this._http
      .post(this.getUrl('forgot'), JSON.stringify(email), {headers: this._headers})
      .map(res => res.json());
  }

  resetPassword(reset: any) {
    return this._http
      .post(this.getUrl('reset'), JSON.stringify(reset), {headers: this._headers})
      .map(res => res.json());
  }

  // Helpers methods
  ////////////////////////

  isLoggedIn() {
    return tokenNotExpired();
  }

  getUrl(path: string) {
    return this.baseUrl + path;
  }

  getTokenData() {
    const token = localStorage.getItem('id_token');
    if (!token) {
      return;
    }
    return this._jwtHelper.decodeToken(token);
  }
}
