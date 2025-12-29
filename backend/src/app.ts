import express from 'express';
import appRoutes from './routes/index.js';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/errorHandler.js';

export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api', appRoutes);
app.use(errorHandler);
