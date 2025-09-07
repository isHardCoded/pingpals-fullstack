import type { Post } from '../shared/types/Post.ts'
import { API_URL } from '../shared/constants.ts'

export const postService = {
	getPosts: async () => {
		const response = await fetch(`${API_URL}/posts`)

		const data = await response.json()

		if (!response.ok) {
			throw new Error(data.error || 'Unknown error')
		}

		return data
	},

	addPost: async ({ post, token }: { post: Post; token: string | null }) => {
		const response = await fetch(`${API_URL}/posts/add`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(post),
		})

		const data = await response.json()

		if (!response.ok) {
			throw new Error(data.error || 'Unknown error')
		}

		return data
	},
}
