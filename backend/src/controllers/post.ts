import type { NextFunction, Request, Response } from 'express';
import { PostService } from '../services/post.js';
import { CreatePostDto } from '../dto/post/create.js';

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

  createPost = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { title, content } = req.body as CreatePostDto;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title or content are required' });
    }

    try {
      const post = await this.postService.create({
        title,
        content,
        authorId: userId,
      });
      return res.status(201).json({ data: post });
    } catch (e) {
      next(e);
    }
  };
}
