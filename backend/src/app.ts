import express from 'express';
import appRoutes from './routes/index.ts';
import { errorHandler } from './middlewares/errorHandler.ts';

export const app = express();

app.use(express.json());
app.use('/api', appRoutes);
app.use(errorHandler);
