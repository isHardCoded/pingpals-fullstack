import { ModelStatic } from 'sequelize';
import type { Post as PostModel } from '../models/Post/Post.js';
import { AppError } from '../errors/app.js';
import { CreatePostDto } from '../dto/post/create.js';
import { User } from '../models/User/User.js';

export class PostService {
  constructor(private postModel: ModelStatic<PostModel>) {}

  getAllPosts = async () => {
    return this.postModel.findAll({
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'firstName', 'lastName'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });
  };

  getPostById = async (id: string) => {
    const post = await this.postModel.findOne({
      where: { id: Number(id) },
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'firstName', 'lastName'],
        },
      ],
    });

    if (!post) {
      throw new AppError('Post not found', 404);
    }

    return post;
  };

  create = async (data: CreatePostDto & { authorId: number }) => {
    const post = await this.postModel.create(data);

    if (!post) {
      throw new AppError('Post was not created', 404);
    }

    return this.postModel.findByPk(post.id, {
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'firstName', 'lastName'],
        },
      ],
    });
  };
}
