import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';
import { AppError } from '../errors/app.js';
import { NextFunction, Request, Response } from 'express';

export const authMiddleware = (req: Request, _: any, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return next(new AppError('Unauthorized', 401));
  }

  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET!,
    ) as JwtPayload;
    req.userId = payload.id;
    next();
  } catch (e) {
    next(new AppError('Unauthorized', 401));
  }
};
