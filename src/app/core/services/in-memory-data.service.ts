import { InMemoryDbService, createErrorResponse, emitResponse, HttpMethodInterceptorArgs,
  ParsedUrl, RequestInfo, STATUS } from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {RequestMethod, ResponseOptions} from '@angular/http';

// /api/accounts/1
// /api/symbols/1
// https://github.com/angular/in-memory-web-api/blob/master/examples/hero-data.service.ts

let accounts;
(async () => {
  const response = await fetch('assets/data/accounts.json');
  accounts = await response.json();
})();

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  // async createDb() {
  createDb() {
    // const accounts = [
    //   { id: 1, name: 'Windstorm' },
    //   { id: 2, name: 'Bombasto' },
    //   { id: 3, name: 'Magneta' },
    //   { id: 4, name: 'Tornado' },
    //   { id: 5, name: 'Superman'},
    //   { id: 6, name: 'Batman'},
    //   { id: 7, name: 'BatGirl'},
    //   { id: 8, name: 'Robin'},
    //   { id: 9, name: 'Flash'},
    //   { id: 10, name: 'Bombasto' },
    //   { id: 11, name: 'Magneta' },
    //   { id: 12, name: 'Tornado' },
    //   { id: 13, name: 'Windstorm' },
    //   { id: 14, name: 'Bombasto' },
    //   { id: 15, name: 'Magneta' },
    //   { id: 16, name: 'Tornado' },
    //   { id: 17, name: 'Windstorm' },
    //   { id: 18, name: 'Bombasto' },
    //   { id: 19, name: 'Magneta' },
    //   { id: 20, name: 'Tornado' }
    // ];

    // const response = await fetch('assets/data/accounts.json');
    // const accounts = await response.json();
    // console.log('accounts', accounts);
    const symbols = [
      {
        'id': 1,
        'code': 'MSFT',
        'entity': 'Microsoft'
      },
      {
        'id': 2,
        'code': 'AAPL',
        'entity': 'Apple'
      },
      {
        'id': 3,
        'code': 'GOOG',
        'entity': 'Google'
      }
    ];

    return {accounts, symbols};
  }

  // intercept response from the default HTTP method handlers
  responseInterceptor(response: ResponseOptions, reqInfo: RequestInfo) {
    const method = RequestMethod[reqInfo.req.method].toUpperCase();
    const body = JSON.stringify(response.body);
    console.log(`responseInterceptor: ${method} ${reqInfo.req.url}: \n${body}`);
    // I don't need wrapper, striping `data`
    if (response.body) {
      response.body = (response.body as any).data;
    }
    return response;
  }

  // parseUrl override
  // parseUrl(url: string): ParsedUrl {
  //
  // }
}
