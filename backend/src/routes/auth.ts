import { Router } from 'express';
import { AuthController } from '../controllers/auth.js';
import { User } from '../models/User/User.js';
import { AuthService } from '../services/auth.js';
import { UserService } from '../services/user.js';

const router = Router();

const userService = new UserService(User);
const authService = new AuthService(userService);
const authController = new AuthController(authService);

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;
