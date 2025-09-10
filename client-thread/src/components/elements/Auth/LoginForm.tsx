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

		await login(data)
		navigate(PAGES.HOME)
	}

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-5 '>
			<InputItem
				placeholder='Имя пользователя'
				name='username'
				type='text'
				value={data.username}
				onChange={handleChange}
			/>
			<InputItem
				placeholder='Пароль'
				name='password'
				type='password'
				value={data.password}
				onChange={handleChange}
			/>

			{error && <p className='text-rose-700 text-sm text-center'>{error}</p>}

			<button
				type='submit'
				disabled={loading}
				className={`bg-blue-700 text-white rounded-md p-2 text-base cursor-pointer hover:bg-blue-700/90 ${
					loading ? 'opacity-50 cursor-not-allowed' : ''
				}`}
			>
				{loading ? 'Signing In...' : 'Войти'}
			</button>
			<p className='text-center '>
				<Link
					className='ml-2 text-sm text-blue-800'
					to={{ pathname: PAGES.SIGN_UP }}
				>
					Создать аккаунт →
				</Link>
			</p>
		</form>
	)
}
