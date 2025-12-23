import type { NextFunction, Request, Response } from 'express';
import type { AuthService } from '../services/auth.ts';

export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.authService.getUser({ email: req.body.email });

      if (user) {
        return res.status(409).json({ message: 'Email already exists' });
      }

      const newUser = await this.authService.createUser(req.body);
      return res.status(201).json(newUser);
    } catch (e) {
      next(e);
    }
  };
}
