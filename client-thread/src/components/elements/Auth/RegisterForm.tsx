import { Link } from 'react-router-dom'
import { PAGES } from '../../../shared/config/Pages.config'

export default function RegisterForm() {
	return (
		<form className='space-y-4 md:space-y-6'>
			<input type='text' />
			<input type='text' />
			<button type='submit'>Sign Up</button>
			<p>
				Have an account?
				<Link to={{ pathname: PAGES.SIGN_IN }}>Sign In</Link>
			</p>
		</form>
	)
}
