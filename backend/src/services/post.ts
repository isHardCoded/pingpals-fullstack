import { ModelStatic } from 'sequelize';
import type { Post as PostModel } from '../models/Post/Post.js';
import { AppError } from '../errors/app.js';

export class PostService {
  constructor(private postModel: ModelStatic<PostModel>) {}

  getAllPosts = async () => {
    return this.postModel.findAll();
  };

  getPostById = async (id: string) => {
    const post = await this.postModel.findOne({
      where: { id: Number(id) },
    });

    if (!post) {
      throw new AppError('Post not found', 404);
    }

    return post;
  };
}
