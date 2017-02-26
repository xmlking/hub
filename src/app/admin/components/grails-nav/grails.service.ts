import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';

@Injectable()
export class GrailsService {

  _navData: Observable<any>;

  constructor(private http: Http) { }

  getGrailsNavData(): Observable<any> {
    if (!this._navData) {
      this._navData = this.http.get(`${environment.GRAILS_BASE_URL}/application`)
          .map((res: Response) => res.json());
    }
    return this._navData;
  }
}
