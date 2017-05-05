import { Module } from 'nest.js';
import { ChatGateway } from '../users/chat.gateway';

@Module({
    components: [ ChatGateway ],
    exports: [ ChatGateway ],
})
export class SharedModule {}
