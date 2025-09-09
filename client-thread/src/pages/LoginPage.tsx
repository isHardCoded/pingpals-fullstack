import LoginForm from '../components/elements/Auth/LoginForm'

export default function LoginPage() {
	return (
		<div className='w-100 mx-auto mt-20'>
			<h1 className='text-indigo-800 text-2xl font-bold text-center mb-4'>
				Ping Pals
			</h1>
			<div className='bg-blue-100 text-indigo-800 text-center p-5 rounded-md mb-4'>
				<p>Login</p>
			</div>
			<LoginForm />
		</div>
	)
}
