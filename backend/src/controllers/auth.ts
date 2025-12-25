import type { NextFunction, Request, Response } from 'express';
import type { AuthService } from '../services/auth.js';
import { AppError } from '../errors/app.js';

export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.authService.register(req.body);
      return res.status(201).json({ data: user });
    } catch (e) {
      next(e);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new AppError('Username and password are required', 400);
    }

    try {
      const user = await this.authService.login({ username, password });
      return res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  };
}
