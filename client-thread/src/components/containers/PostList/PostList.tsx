import { usePost } from '../../../hooks/usePost.ts'
import PostBlock from '../../elements/PostBlock/PostBlock.tsx'

const PostList = () => {
	const { posts } = usePost()

	return (
		<ul className='bg-gray-950'>
			{posts.map(post => (
				<li key={post.id}>
					<PostBlock {...post} />
				</li>
			))}
		</ul>
	)
}

export default PostList
