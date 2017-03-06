import 'reflect-metadata';
import {useContainer, useKoaServer} from 'routing-controllers';
import {useContainer as useContainerScoket, useSocketServer} from 'socket-controllers';
import {Container} from 'typedi';
import * as Koa from 'koa';
import * as http from 'http';
import * as https from 'https';
import * as cors from 'kcors';
import * as Router from 'koa-router';
import * as IO from 'koa-socket';
import * as Express from 'express';
import * as c2k from 'koa-connect';
import * as jsonServer from 'json-server';

import config from './config';
import logger from './middleware/logger';
import errorHandler from './middleware/DefaultErrorHandler';
import SocketService from './socket/socket.service';

import InfluxController from './socket/influx.controller';

interface ExtendedKoa extends Koa {
  io: any;
  _io: any;
}

// setup routing-controllers to use typedi container. You can use any container here
useContainer(Container);
useContainerScoket(Container);

const express = Express();
const jsonServerRoute = jsonServer.router('db/db.json');
const port = process.env.PORT || config.port || 3000;

express.use('/api', jsonServerRoute);

const app  = Container.get(Koa)
  , influxController = Container.get(InfluxController)
  , influxRouter = influxController.router;

// Use koa server
useKoaServer(app, {
  routePrefix: '/api1',
  controllerDirs: [__dirname + '/controllers/**/*.ts']
});
useSocketServer((<ExtendedKoa>app)._io, {
  controllers: [__dirname + '/scontrollers/*.ts']
});

app.use(cors())
  .use(errorHandler)
  .use(logger)
  .use(c2k(express))
  .use(influxRouter.routes())
  .use(influxRouter.allowedMethods());



app.listen(port, () => console.log(`listening on port ${port}`));


