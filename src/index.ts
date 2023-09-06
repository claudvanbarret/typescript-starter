import express, { Router, Request, Response } from 'express';

import './utils/DotEnvUtils';

const app = express();

const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

app.use(route);

app.listen(process.env.PORT ?? 3001, () => 'Server running on port 3001');
