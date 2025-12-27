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
    try {
      const { user, accessToken, refreshToken } = await this.authService.login(
        req.body,
      );

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      res.json({ accessToken, user });
    } catch (e) {
      next(e);
    }
  };

  refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tokens = await this.authService.refresh(req.cookies.refreshToken);
      res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true });
      res.json({ accessToken: tokens.accessToken });
    } catch (e) {
      next(e);
    }
  };

  logout = async (req: Request, res: Response) => {
    await this.authService.logout(req.cookies.refreshToken);
    res.clearCookie('refreshToken');
    res.status(204).send();
  };
}
