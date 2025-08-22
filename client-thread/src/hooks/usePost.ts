import type { Post } from "../models/Post.ts";
import React, { useState } from "react";
import { postService } from "../services/PostService.ts";

export const usePost = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = async () => {
        setPosts(await postService.getPosts());
    }

    const addPost = async (post: Post, token: string) => {
        await postService.addPost({ post, token });
    }

    React.useEffect(() => {
        getPosts();
    }, [])

    return {
        posts,
        setPosts,
        getPosts,
        addPost
    }

}