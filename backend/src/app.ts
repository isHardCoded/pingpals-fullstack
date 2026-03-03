import express from 'express';
import cors from 'cors';
import appRoutes from './routes/index.js';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/errorHandler.js';

export const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use('/api', appRoutes);
app.use(errorHandler);
