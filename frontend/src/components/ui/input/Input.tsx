import React from 'react';
import type { InputProps } from './types';
import s from './styles.module.css';
import { cn } from '../../../shared/lib';

export const Input: React.FC<InputProps> = ({
  className,
  label,
  value = '',
  onChange,
  error,
  type = 'text',
  name,
  id,
  disabled,
  placeholder,
}) => {
  const inputId = id || name;
  const hasError = Boolean(error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div
      className={cn(
        s.root,
        hasError && s.error,
        disabled && s.disabled,
        className,
      )}
    >
      {label && (
        <label htmlFor={inputId} className={s.label}>
          {label}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        className={s.input}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${inputId}-error` : undefined}
      />

      {hasError && (
        <p id={`${inputId}-error`} className={s.errorMessage} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
