import React from 'react'
import { PulseLoader } from 'react-spinners'

interface ButtonProps {
	value: string
	type: 'submit' | 'reset' | 'button'
	loading?: boolean
	isLoader: boolean
}

const Button: React.FC<ButtonProps> = ({ value, type, isLoader, loading }) => {
	return (
		<button type={type}>
			{' '}
			{isLoader && loading && (
				<span>
					<PulseLoader color={'#FFFFFF'} size={5} />
				</span>
			)}{' '}
			<p>{value}</p>
		</button>
	)
}

export default Button
