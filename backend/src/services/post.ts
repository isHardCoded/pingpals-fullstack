import { ModelStatic } from 'sequelize';
import type { Post as PostModel } from '../models/Post/Post.js';
import { AppError } from '../errors/app.js';
import { CreatePostDto } from '../dto/post/create.js';

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

  create = async (data: CreatePostDto) => {
    const post = await this.postModel.create(data);

    if (!post) {
      throw new AppError('Post was not created', 404);
    }

    return post;
  };
}
