import React from 'react'
import Button from '../../ui/Button.tsx'
import { usePost } from '../../../hooks/usePost.ts'

const PostAdd = () => {
	const [content, setContent] = React.useState<string>('')

	const { addPost } = usePost()
	// const { token } = useAuth();
	// const { user } = useAuth();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		//

		setContent('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input
					type='text'
					placeholder='Enter a content...'
					value={content}
					onChange={e => setContent(e.target.value)}
				/>
				<Button type='submit' isLoader={true} value='Send' />
			</div>
		</form>
	)
}

export default PostAdd
