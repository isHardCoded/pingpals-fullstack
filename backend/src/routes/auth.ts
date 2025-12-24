import { Router } from 'express';
import { AuthController } from '../controllers/auth.ts';
import { User } from '../models/User/User.ts';
import { AuthService } from '../services/auth.ts';

const authService = new AuthService(User);
const authController = new AuthController(authService);

const router = Router();

router.post('/register', authController.createUser);

export default router;
