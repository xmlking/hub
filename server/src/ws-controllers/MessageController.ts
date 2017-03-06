import {
  OnConnect, SocketController, ConnectedSocket, OnDisconnect, MessageBody, OnMessage,
  SocketId, EmitOnSuccess, SkipEmitOnEmptyResult, SocketIO, EmitOnFail
} from 'socket-controllers';
import {CategoryRepository} from '../repository/CategoryRepository';
import {Service} from 'typedi';

@Service()
@SocketController('/iot')
export class MessageController {

  constructor(private categoryRepository: CategoryRepository) {
  }

  @OnConnect()
  connection(@ConnectedSocket() socket: any) {
    console.log('client connected');
  }

  @OnDisconnect()
  disconnect(@ConnectedSocket() socket: any) {
    console.log('client disconnected');
  }

  @OnMessage('save')
  @EmitOnSuccess('save_successfully')
  @EmitOnFail('save_error')
  @SkipEmitOnEmptyResult()
  async save(@ConnectedSocket() socket: any, @MessageBody() message: any,
             @SocketId() id: string, @SocketIO() io: any) {
    console.log('received message:::', message, id);
    console.log('setting id to the message and sending it back to the client');
    if (message.id === '1') {
      throw new Error('message.id = 1, Fatal error!');
    }
    // Broadcasts to everybody, in namespace 'iot', include sender
    io.of('iot').emit('message', 'yo connections, lets chat');
    // Broadcasts to all other connections
    socket.broadcast.emit( 'message', 'ok connections:iot:broadcast' );
    // Broadcasts to all clients in 'game' room(channel) except sender
    socket.broadcast.to('game').emit('message', 'nice game');
    // Emits to just this socket
    socket.emit( 'message', 'ok connections:iot:emit' );
    return this.categoryRepository.findAll();
  }

}
