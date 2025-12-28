import jwt, { JwtPayload } from 'jsonwebtoken';
import { AppError } from '../errors/app.js';
import { NextFunction, Request } from 'express';
import { JWT_ACCESS_SECRET } from '../config/env.js';

export const authMiddleware = (
  req: Request,
  _: unknown,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return next(new AppError('Unauthorized', 401));
  }

  try {
    const payload = jwt.verify(token, JWT_ACCESS_SECRET) as JwtPayload;
    req.userId = payload.id;
    next();
  } catch (e) {
    next(new AppError('Unauthorized', 401));
  }
};
