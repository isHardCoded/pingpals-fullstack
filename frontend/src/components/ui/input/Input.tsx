import type { InputProps } from './types';
import s from './styles.module.css';
import type React from 'react';

export function Input({
  className,
  placeholder,
  value,
  onChange,
  error,
  type,
  name,
  id,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      id={id || name}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
}
