import { Router } from 'express';
import postRoutes from './post.js';
import authRoutes from './auth.js';

const router = Router();

router.use('/posts', postRoutes);
router.use('/auth', authRoutes);

export default router;
