const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const events = require('events');
const cors  = require('kcors');

const PassThrough = require('stream').PassThrough;
const dispatcher = new events.EventEmitter();
const app = new Koa();
const router = new Router({
  prefix: '/api'
});

router.post('/send', bodyParser(), async (ctx) => {
  console.log('body', ctx.request.body);
  dispatcher.emit('message', ctx.request.body);
  ctx.response.set('Content-Type', 'text/plain;charset=utf-8');
  ctx.body = 'ok';
});


router.get('/stream', async (ctx) => {
  let stream = new PassThrough();

  let fn = (data, event) => {
    if(event) stream.write(`event: ${event}\n`);
    stream.write(`data: ${JSON.stringify(data)}\n\n`);
  }
  let finish = (e) => {
    console.log('finish')
    dispatcher.removeListener('message', fn);
  }

  ctx.response.status = 200;
  ctx.response.type = 'text/event-stream;charset=utf-8';
  ctx.response.set('Cache-Control', 'no-cache');

  ctx.body = stream;

  stream.write(': open stream\n\n');
  dispatcher.on('message', fn);
  // ctx.req.on('close', ctx.res.end());
  ctx.req.on('close', finish);
  ctx.req.on('finish', finish);
  ctx.req.on('error', finish);
});

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0');

