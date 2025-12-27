import { Router } from 'express';
import { PostController } from '../controllers/post.js';
import { PostService } from '../services/post.js';
import { Post } from '../models/Post/Post.js';

const postService = new PostService(Post);
const postController = new PostController(postService);

const router = Router();

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);

export default router;
