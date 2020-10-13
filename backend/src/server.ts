import express from 'express';
import cors from 'cors';

// Import routes
import BaseRouter from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.disable('x-powered-by');

app.use(BaseRouter);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log('@port', PORT);
});
