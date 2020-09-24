import Express from 'express';
import { Server } from 'http';
import loadModules from './setup/server/load-modules';
import startServer from './setup/server/start-server';
import loadRoutes from './setup/server/load-routes';

const app = new Express()
const server = new Server(app)

loadModules(app)

loadRoutes(app)

startServer(server)