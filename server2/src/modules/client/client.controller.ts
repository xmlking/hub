import { Controller, RequestMapping, Transport  } from 'nest.js';
// import { Client, ClientProxy, Transport } from 'nest.js/microservices';
import { Client, ClientProxy } from 'nest.js/microservices';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';

const MicroserviceClient = { transport: Transport.TCP, port: 5667 };

@Controller()
export class ClientController {
    @Client(MicroserviceClient)
    public client: ClientProxy;

    @RequestMapping({ path: 'client' })
    public sendMessage(req, res) {
        const pattern = { command: 'add' };
        const data = [ 1, 2, 3, 4, 5 ];

        this.client.send(pattern, data)
            // .catch((err) => Observable.empty())
            .subscribe((result) => res.status(200).json({ result }));
    }
}
