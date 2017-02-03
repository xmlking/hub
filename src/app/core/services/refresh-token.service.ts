import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
import {Scheduler} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {JwtHelper, AuthHttp} from 'angular2-jwt';


@Injectable()

export class RefreshTokenService {
  private url = 'http://localhost:5000/api/auth/refresh';
  private _headers: Headers = new Headers();
  private _jwtHelper: JwtHelper = new JwtHelper();

  constructor(private _http: Http,
              private _authHttp: AuthHttp,
              private _router: Router) {
    const token = localStorage.getItem('id_token');
    if (token) {
      this.scheduleRefresh();
    }

  }

  scheduleRefresh() {
    this._authHttp.tokenStream.subscribe(
      token => {
        const now: number = new Date().valueOf();
        const jwtExp = this._jwtHelper.decodeToken(token).exp;
        const exp = new Date(0);
        exp.setUTCSeconds(jwtExp);
        const delay = exp.valueOf() - now;

        const queueRefresh = Scheduler.queue;

        queueRefresh.schedule(() => {
          this.refreshToken();
        }, delay);
      });
  }

  refreshToken() {
    const token = localStorage.getItem('id_token');
    // TODO check if token is present
    this._headers.set('Authorization', token);
    // TODO logout on error expired session
    return this._http.get(this.url, {headers: this._headers})
      .map(res => res.json())
      .subscribe(
        data => {
          localStorage.setItem('id_token', data.token);
          this.scheduleRefresh();
        },
        err => {
          localStorage.removeItem('id_token');
          localStorage.removeItem('currentUser');
          this._router.navigateByUrl('/login');
        });
  }
}
