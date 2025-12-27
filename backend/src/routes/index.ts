import { Router } from 'express';
import postRoutes from './post.js';
import authRoutes from './auth.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/posts', postRoutes);

export default router;
