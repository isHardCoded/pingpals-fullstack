import { Link, useNavigate } from 'react-router-dom'
import { PAGES } from '../../../shared/config/Pages.config'
import InputItem from './InputItem'
import React, { useState } from 'react'
import { USER_SERVICE } from '../../../services/User.service'

const initialState = {
	firstname: '',
	lastname: '',
	username: '',
	email: '',
	password: '',
}

export default function RegisterForm() {
	const [data, setData] = useState(initialState)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(false)

	const navigate = useNavigate()

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setError(null)
		setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setError(null)
		setLoading(true)

		setTimeout(async () => {
			try {
				await USER_SERVICE.register(data)
				navigate(PAGES.SIGN_IN)
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message)
				} else {
					setError('Something went wrong')
				}
			} finally {
				setLoading(false)
			}
		}, 2000)
	}

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-5'>
			<div className='flex justify-between gap-5'>
				<InputItem
					placeholder='Имя'
					name='firstname'
					type='text'
					value={data.firstname}
					onChange={handleChange}
				/>
				<InputItem
					placeholder='Фамилия'
					name='lastname'
					type='text'
					value={data.lastname}
					onChange={handleChange}
				/>
			</div>
			<InputItem
				placeholder='Имя пользователя'
				name='username'
				type='text'
				value={data.username}
				onChange={handleChange}
			/>
			<InputItem
				placeholder='Почта'
				name='email'
				type='email'
				value={data.email}
				onChange={handleChange}
			/>
			<InputItem
				placeholder='Пароль'
				name='password'
				type='password'
				value={data.password}
				onChange={handleChange}
			/>

			{error && <p className='text-rose-600 text-md text-center'>{error}</p>}

			<button
				type='submit'
				disabled={loading}
				className={`bg-blue-700 text-white rounded-md text-base p-2 cursor-pointer hover:bg-blue-700/90 ${
					loading ? 'opacity-50 cursor-not-allowed' : ''
				}`}
			>
				{loading ? 'Signing Up...' : 'Зарегистрироваться'}
			</button>
			<p className='text-center'>
				<Link
					className='ml-2 text-sm text-blue-800'
					to={{ pathname: PAGES.SIGN_IN }}
				>
					Войти →
				</Link>
			</p>
		</form>
	)
}
