import type { NextFunction, Request, Response } from 'express';
import type { AuthService } from '../services/auth.ts';

export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, username, password, firstName, lastName } = req.body;

      if (!email || !username || !password) {
        return res
          .status(400)
          .json({ message: 'Email, username, and password are required' });
      }

      const user = await this.authService.getUser({ email });

      if (user) {
        return res.status(409).json({ message: 'Email already exists' });
      }

      const newUser = await this.authService.createUser({
        email,
        username,
        password,
        firstName,
        lastName,
      });
      return res.status(201).json(newUser);
    } catch (e) {
      next(e);
    }
  };
}
