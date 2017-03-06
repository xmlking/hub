import 'reflect-metadata';
import {useContainer, useKoaServer} from 'routing-controllers';
import {useContainer as useContainerScoket, useSocketServer} from 'socket-controllers';
import {Container} from 'typedi';
import * as http from 'http';
import * as https from 'https';
import * as Koa from 'koa';
import * as fs from 'fs';
import * as socketIO from 'socket.io';
import * as cors from 'kcors';
import * as Express from 'express';
import * as c2k from 'koa-connect';
import * as jsonServer from 'json-server';

import config from './config';
import logger from './middleware/logger';
import errorHandler from './middleware/DefaultErrorHandler';

// setup routing-controllers to use typedi container. You can use any container here
useContainer(Container);
useContainerScoket(Container);

import './middleware/AuthenitificationMiddleware';

const express = Express();
const jsonServerRoute = jsonServer.router('db/db.json');
express.use('/api', jsonServerRoute);

const app = new Koa();
const server = https.createServer({
  key: fs.readFileSync(config.ssl['key'], 'utf8'),
  cert: fs.readFileSync(config.ssl['cert'], 'utf8')
}, app.callback());
const port = process.env.PORT || config.port || 3000;
const io = socketIO(server);

// Use koa server
useKoaServer(app, {
  routePrefix: '/api1',
  controllerDirs: [__dirname + '/controllers/**/*.ts']
});
useSocketServer(io, {
  controllers: [__dirname + '/ws-controllers/*.ts']
});

app.use(cors())
  .use(errorHandler)
  .use(logger)
  .use(c2k(express));

server.listen(port, () => console.log(`listening on port ${port}`));



