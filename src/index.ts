import express, { Router, Request, Response } from 'express';
import cors from 'cors';

import './utils/paths';

import '@utils/dotenv';

const app = express();

const route = Router();

app.use(express.json());
app.use(cors());

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

app.use(route);

app.listen(process.env.PORT ?? 3001, () => 'Server running on port 3001');
