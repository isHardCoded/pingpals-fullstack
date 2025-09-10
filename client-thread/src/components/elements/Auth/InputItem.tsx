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
			className='border border-gray-800 rounded-md p-3 text-sm w-full pl-3 bg-gray-900 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none'
			type={type}
			value={value}
			name={name}
			placeholder={placeholder}
			onChange={onChange}
			required
		/>
	)
}
