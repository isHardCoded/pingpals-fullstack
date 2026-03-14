import { httpClient } from '../api/http-client';
import { API_ENDPOINTS } from '../api/endpoints';

export interface CreatePostDto {
  title: string;
  content: string;
}

export interface PostAuthor {
  id: number;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  author: PostAuthor;
  likesCount: number;
  commentsCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetPostsResponse {
  data: Post[];
}

export const PostService = {
  async getPosts(): Promise<Post[]> {
    const response = await httpClient.get<GetPostsResponse>(
      API_ENDPOINTS.POSTS.LIST,
    );
    return response.data.data;
  },

  async create(data: CreatePostDto): Promise<Post> {
    const response = await httpClient.post<Post>(
      API_ENDPOINTS.POSTS.CREATE,
      data,
    );
    return response.data;
  },
};
