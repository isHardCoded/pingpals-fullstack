import type { Post } from '../shared/types/Post.ts'
import React, { useState } from 'react'
import { postService } from '../services/Post.service.ts'

export const usePost = () => {
	const [posts, setPosts] = useState<Post[]>([])

	const getPosts = async () => {
		setPosts(await postService.getPosts())
	}

	const addPost = async ({
		post,
		token,
	}: {
		post: Post
		token: string | null
	}) => {
		const createdPost = await postService.addPost({ post, token })
		setPosts(prev => [...prev, createdPost])
	}

	React.useEffect(() => {
		getPosts()
	}, [posts])

	return {
		posts,
		setPosts,
		addPost,
	}
}
