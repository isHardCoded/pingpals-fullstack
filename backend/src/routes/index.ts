import { Router } from 'express';
import postRoutes from './post.ts';
import authRoutes from './auth.ts';

const router = Router();

router.use('/posts', postRoutes);
router.use('/auth', authRoutes);

export default router;
