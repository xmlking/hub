import * as Koa from 'koa';
import * as IO from 'koa-socket';
import {Container, Service} from 'typedi';

@Service()
export default class  SocketService {
   public io = new IO({
    namespace: 'iot'
  });
  constructor(app: Koa) {
    this.io.attach(app);
  }
}
