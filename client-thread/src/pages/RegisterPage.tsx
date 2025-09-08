import RegisterForm from '../components/elements/Auth/RegisterForm'

export default function RegisterPage() {
	return (
		<div className='w-100 mx-auto mt-20'>
			<h1 className='text-indigo-800 text-2xl font-bold text-center mb-4'>
				Ping Pals
			</h1>
			<div className='bg-blue-100 text-indigo-800 text-center p-5 rounded-md mb-4'>
				<p>Online Registration</p>
			</div>
			<RegisterForm />
		</div>
	)
}
