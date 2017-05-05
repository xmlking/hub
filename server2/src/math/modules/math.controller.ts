import { Controller } from 'nest.js';
import { MessagePattern } from 'nest.js/microservices';

@Controller()
export class MathController {
    @MessagePattern({ command: 'add' })
    add(data, respond) {
        const numbers = data || [];
        respond(null, numbers.reduce((a, b) => a + b));
    }
}
