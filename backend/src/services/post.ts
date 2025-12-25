import { Post } from '../models/Post/Post.js';

export class PostService {
  async getAllPosts() {
    return await Post.findAll();
  }
}
