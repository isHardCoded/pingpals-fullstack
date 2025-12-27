import { Router } from 'express';
import { AuthController } from '../controllers/auth.js';
import { User } from '../models/User/User.js';
import { AuthService } from '../services/auth.js';
import { UserService } from '../services/user.js';
import { TokenService } from '../services/token.js';

const router = Router();

const tokenService = new TokenService();
const userService = new UserService(User);
const authService = new AuthService(userService, tokenService);
const authController = new AuthController(authService);

router.post('/register', authController.register);
router.post('/login', authController.refresh);
router.post('/refresh', authController.refresh);
router.post('/logout', authController.logout);

export default router;
