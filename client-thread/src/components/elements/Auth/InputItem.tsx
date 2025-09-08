import type React from 'react'

interface InputItemProps {
	placeholder: string
	value: string
	name: string
	type: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputItem({
	placeholder,
	value,
	name,
	type,
	onChange,
}: InputItemProps) {
	return (
		<input
			className='border-1 border-gray-300 rounded-md p-3 text-base w-full pl-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none'
			type={type}
			value={value}
			name={name}
			placeholder={placeholder}
			onChange={onChange}
			required
		/>
	)
}
