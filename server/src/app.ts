import express from 'express';

import { errorMiddleware } from './middlewares/error.middleware';

import { healthRouter } from './routes/health.route';
import { filesRouter } from './routes/files.route';

const environment = process.env.NODE_ENV || 'development';

const app = express();

app.use('/api', healthRouter);
app.use('/api', filesRouter);

if (environment === 'production') {
  app.use(express.static('./client/dist'));
}

app.use(errorMiddleware);

export { app };
