import * as IO from 'koa-socket';
import * as Router from 'koa-router';
import {Container, Service} from 'typedi';
import SocketService from './socket.service';

@Service()
export default class InfluxController  {
  public io: IO;
  public router: Router;

  // constructor(io: IO) {
  //   this.io = io;
  constructor(socketService: SocketService) {
    this.io = socketService.io;
    this.router = new Router({
      prefix: '/influx'
    });
    this.router.get('/', this.myGet);
    this.router.put('/receive', this.myPut);

    this.io.on('connection', this.onConnection);
    this.io.on('disconnect', this.onDisconnect);
    this.io.on('data', this.myData);
    this.io.on('ack', this.myAcl);
    this.io.on('message',  this.myMessage);
    this.io.use(this.logger);
  }

  async myGet( ctx, next ) {
    ctx.body = 'aaa';
  }
  async myPut( ctx, next ) {
    this.io.broadcast('consume', ctx.request.body);
    console.log('in myPut');
    ctx.body = 'aaa';
  }
  async logger( ctx, next ) {
    const start = new Date();
    await next();
    const ms: number = new Date().getTime() - start.getTime();
    console.log(`response time: ${ms}ms`);
  }

  onConnection = async (ctx ) => {
    console.log( 'Joining chat namespace', ctx.socket.id );
    this.io.broadcast( 'connections', {
      numConnections: this.io.connections.size
    });
  }

  onDisconnect = async (ctx ) => {
    console.log( 'leave event', ctx.socket.id );
    this.io.broadcast( 'connections', {
      numConnections: this.io.connections.size
    });
  }

  async myAcl(ctx, data ) {
    console.log( 'data event with acknowledgement', data );
    ctx.acknowledge('received');
  }

  async myData(ctx, data ) {
    console.log( 'data event', data );
    console.log( 'ctx:', ctx.event, ctx.data, ctx.socket.id );
    ctx.socket.emit( 'response', {
      message: 'response from server'
    });
  }
  myMessage = async  ( ctx ) => {
    console.log( 'chat message received', ctx.data );

    // Broadcasts to everybody, including this connection
    this.io.broadcast( 'message', 'yo connections, lets chat' );

    // Broadcasts to all other connections
    ctx.socket.broadcast( 'message', 'ok connections:chat:broadcast' );

    // Emits to just this socket
    ctx.socket.emit( 'message', 'ok connections:chat:emit' );
  }


}
