import express from 'express';
import PostController from '../controllers/PostController.js';
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/', PostController.getPosts);
router.post('/add', authMiddleware, PostController.addPost);
router.put('/update/:id', authMiddleware, PostController.updatePost);
router.delete('/delete/:id', authMiddleware, PostController.deletePost);

export default router;