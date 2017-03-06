import {OnConnect, SocketController, ConnectedSocket, OnDisconnect, MessageBody, OnMessage} from 'socket-controllers';
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
  async save(@ConnectedSocket() socket: any, @MessageBody() message: any) {
    console.log('categoryRepository:::', this.categoryRepository);
    console.log('received message:::', message);
    console.log('setting id to the message and sending it back to the client');
    socket.emit('message_saved', await this.categoryRepository.findAll());
  }

}
