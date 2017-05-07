import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodosService {

  constructor(private http: Http) {}

  addTodo(todo: Todo) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:3030/todos/', { todo }, options)
      .map(this.extractData)
      .toPromise()
      .catch(this.handleError);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get('http://localhost:3030/todos/')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
