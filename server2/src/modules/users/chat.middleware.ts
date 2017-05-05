import { GatewayMiddleware  } from 'nest.js/websockets';
import { UsersService } from './users.service';
import { Middleware } from 'nest.js';
@Middleware()
export class ChatMiddleware implements GatewayMiddleware {
    public resolve(): (socket, next) => void {
        return (socket, next) => {
            console.log('Authorization...');
            next();
        };
    }
}
