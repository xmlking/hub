import {Middleware, MiddlewareInterface } from 'socket-controllers';
@Middleware()
export class AuthenitificationMiddleware implements MiddlewareInterface {

  use(socket: any, next: ((err?: any) => any)): any {
    console.log('authentication...');
    next();
  }

}
