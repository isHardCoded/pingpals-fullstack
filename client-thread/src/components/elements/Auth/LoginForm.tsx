import { Link, useNavigate } from 'react-router-dom'
import InputItem from './InputItem'
import { PAGES } from '../../../shared/config/Pages.config'
import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'

const initialState = {
	username: '',
	password: '',
}

export default function LoginForm() {
	const [data, setData] = useState(initialState)
	const { login, loading, error } = useAuth()
	const navigate = useNavigate()

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		try {
			await login(data)
			navigate(PAGES.HOME)
		} catch {
			// Ошибка отображается из контекста
		}
	}

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-5'>
			<InputItem
				placeholder='Username'
				name='username'
				type='text'
				value={data.username}
				onChange={handleChange}
			/>
			<InputItem
				placeholder='Password'
				name='password'
				type='password'
				value={data.password}
				onChange={handleChange}
			/>

			{error && <p className='text-red-600 text-sm text-center'>{error}</p>}

			<button
				type='submit'
				disabled={loading}
				className={`bg-indigo-800 text-white rounded-md p-2 cursor-pointer hover:bg-indigo-800/90 ${
					loading ? 'opacity-50 cursor-not-allowed' : ''
				}`}
			>
				{loading ? 'Signing In...' : 'Sign In'}
			</button>
			<p className='text-center'>
				Have not account?
				<Link
					className='ml-2 text-indigo-900 font-medium underline'
					to={{ pathname: PAGES.SIGN_UP }}
				>
					Sign Up
				</Link>
			</p>
		</form>
	)
}
