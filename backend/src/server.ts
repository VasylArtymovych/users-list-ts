import express from 'express';
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from './config';
import { Loggin } from './library';
import { UserRouter } from './routes';
import { unknownRoute, errorHandler } from './helpers';

const app = express();
/** Connect to MongoDB */
mongoose
  .connect(config.mongo.url, { dbName: 'db_users_list', retryWrites: true, w: 'majority' })
  .then(() => {
    Loggin.info('Connected to MongoDB');
    // run server when connected to DB
    runServer();
  })
  .catch((error) => {
    Loggin.error('Unable to connect');
    Loggin.error(error);
  });

function runServer() {
  app.use((req, res, next) => {
    /** Log the Request */
    Loggin.info(`Incoming -> Method:[${req.method}] - Url:[${req.url}] - IP:[${req.socket.remoteAddress}]`);

    res.on('finish', () => {
      /** Log the Response */
      Loggin.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
    });

    next();
  });

  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Rules of API:
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      res.status(200).json({});
    }

    next();
  });

  // Routes:
  app.use('/api/users', UserRouter);

  // Error handlers:
  app.use(unknownRoute);
  app.use(errorHandler);

  // Run server:
  http.createServer(app).listen(config.server.port, () => {
    Loggin.info(`Server is running on port ${config.server.port}`);
  });
}
