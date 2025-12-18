import type { NextFunction, Request, Response } from 'express';
import { PostService } from '../services/post.ts';

const postService = new PostService();

export class PostController {
  async getAllPosts(req: Request, res: Response, next: NextFunction) {
    try {
      const posts = await postService.getAllPosts();
      return res.status(200).json({ data: posts });
    } catch (e) {
      next(e);
    }
  }
}
