import { Post } from '../models/Post/Post.ts';

export class PostService {
  async getAllPosts() {
    return await Post.findAll();
  }
}
