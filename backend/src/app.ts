import type { Request, Response } from 'express';
import express from 'express';
// import routes
// import errorHandler

export const app = express();
app.use(express.json());

app.use('/ping', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'pong' });
});
