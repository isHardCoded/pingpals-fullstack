import type { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/auth.ts';

const userService = new UserService();

export class AuthController {
  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await userService.getUser({ email: req.body.email });

      if (user) {
        return res.status(409).json({ message: 'Email already exists' });
      }
    } catch (e) {
      next(e);
    }
  };
}
