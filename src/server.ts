import express, { Request, Response } from 'express';
import { json } from 'body-parser';

import todoRoutes from './routes/todoRoutes';

const app = express();

//middleware
app.use(json());

app.use('/todos', todoRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('hi');
});

const PORT = 5000;

app.listen(PORT);
