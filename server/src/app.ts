import express from 'express';
import bodyParser from 'body-parser';

import { errorMiddleware } from './middlewares/error.middleware';

import { healthRouter } from './routes/health.route';
import { filesRouter } from './routes/files.route';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', healthRouter);
app.use('/api', filesRouter);

app.use(errorMiddleware);

export { app };
