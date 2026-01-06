import React from 'react';
import type { InputProps } from './types';
import s from './styles.module.css';

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

  return (
    <div
      className={[
        s.root,
        hasError && s.error,
        disabled && s.disabled,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
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
        onChange={(e) => onChange?.(e.target.value)}
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
