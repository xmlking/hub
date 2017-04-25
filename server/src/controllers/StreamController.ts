import {Service} from 'typedi';
import {Request, Response} from 'koa';
import {Controller, Param, Body, Get, Post, Put, Delete, JsonController, Req, Res} from 'routing-controllers';
import * as events from 'events';

const PassThrough = require('stream').PassThrough;
const dispatcher = new events.EventEmitter();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterable<T> {
  for (const item of items) {
    await sleep(500);
    yield item;
  }
}

@Service()
@JsonController()
export class StreamController {

  @Post('/send/:topic')
  post(@Param('topic') topic: string, @Body() data: any) {
    console.log('data', data);
    dispatcher.emit(topic, data);
    return {result: 'ok'};
  }

  @Get('/stream/:topic')
  async stream(@Param('topic') topic: string, @Req() request: Request, @Res() response: Response) {
    try {
      response.status = 200;
      response.type = 'text/event-stream; charset=utf-8';
      response.set('Cache-Control', 'no-cache');

      const stream = new PassThrough();

      const fn = (data, event) => {
        if (event) {
          stream.write(`event: ${event}\n`);
        }
        stream.write(`data: ${JSON.stringify(data)}\n\n`);
      }
      const finish = (e) => {
        console.log('finish...')
        // response.res.end()
        dispatcher.removeListener(topic, fn);
      }

      response.body = stream;

      stream.write(': open stream\n\n');
      dispatcher.on(topic, fn);

      request.req.on('close', finish);
      request.req.on('finish', finish);
      request.req.on('error', finish);
    } catch (e) {
      console.log(e)
    }
  }


  @Get('/sloth')
  async speakLikeSloth() {
    setTimeout(async () => {
      for await (const item of getItemsReallySlowly('never gonna give you up never gonna let you down'.split(' '))) {
        // console.log(item);
        dispatcher.emit('message', {'aaa': item});
      }
    }, 2000);

    return {result: 'ok'};
  }

}

// ES https://localhost:3000/api/stream/message
// POST https://localhost:3000/api/send/message {"aaa": 10} or {"aaa": 0}
// GET https://localhost:3000/api/sloth


