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
					placeholder='First Name'
					name='firstname'
					type='text'
					value={data.firstname}
					onChange={handleChange}
				/>
				<InputItem
					placeholder='Last Name'
					name='lastname'
					type='text'
					value={data.lastname}
					onChange={handleChange}
				/>
			</div>
			<InputItem
				placeholder='Username'
				name='username'
				type='text'
				value={data.username}
				onChange={handleChange}
			/>
			<InputItem
				placeholder='Email'
				name='email'
				type='email'
				value={data.email}
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
				{loading ? 'Signing Up...' : 'Sign Up'}
			</button>
			<p className='text-center'>
				Have an account?
				<Link
					className='ml-2 text-indigo-900 font-medium underline'
					to={{ pathname: PAGES.SIGN_IN }}
				>
					Sign In
				</Link>
			</p>
		</form>
	)
}
