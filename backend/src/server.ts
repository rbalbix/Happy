import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import './database/connection';

// Import routes
import BaseRouter from './routes';
import errorHandler from './errors/handler';

const app = express();
app.use(cors());
app.use(express.json());
app.disable('x-powered-by');

app.use(BaseRouter);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log('@port', PORT);
});
