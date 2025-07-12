import type { Application, Request, Response } from 'express';
import express from 'express';

import urlRoutes from './routes';

const app: Application = express();

app.use(express.json());

app.use('/shorten', urlRoutes);

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
