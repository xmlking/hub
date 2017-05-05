import { WebSocketGateway, SubscribeMessage, WebSocketServer, OnGatewayInit, OnGatewayConnection  } from 'nest.js/websockets';

import { ChatMiddleware } from './chat.middleware';

@WebSocketGateway({
    port: 2000,
    middlewares: [ ChatMiddleware ],
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection {
    @WebSocketServer() private server;

    public afterInit(server) {}
    public handleConnection(client) {}

    @SubscribeMessage('event')
    public onMessage(client, data) {
        client.emit('event', data);
    }
}
