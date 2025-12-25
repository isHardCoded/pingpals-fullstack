import type { NextFunction, Request, Response } from 'express';
import { PostService } from '../services/post.js';

export class PostController {
  constructor(private postService: PostService) {}

  getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const posts = await this.postService.getAllPosts();
      return res.status(200).json({ data: posts });
    } catch (e) {
      next(e);
    }
  };

  getPostById = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: 'Post ID not found' });
    }

    try {
      const post = await this.postService.getPostById(id);
      return res.status(200).json({ data: post });
    } catch (e) {
      next(e);
    }
  };
}
