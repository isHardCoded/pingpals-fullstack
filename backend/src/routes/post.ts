import { Router } from 'express';
import { PostController } from '../controllers/post.js';

const postController = new PostController();

const router = Router();

router.get('/', postController.getAllPosts);

export default router;
