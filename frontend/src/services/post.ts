import { httpClient } from '../api/http-client';
import { API_ENDPOINTS } from '../api/endpoints';

export interface CreatePostDto {
  title: string;
  content: string;
}

export interface CreatePostResponse {
  message: {
    title: string;
    content: string;
  };
}

export interface Post {
  title: string;
  content: string;
}

export const PostService = {
  async create(data: CreatePostDto): Promise<Post> {
    const response = await httpClient.post(API_ENDPOINTS.POSTS.CREATE, data);
    return response.data;
  },
};
