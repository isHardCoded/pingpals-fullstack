import React from 'react';
import type { InputProps } from './types';
import s from './styles.module.css';
export const Input: React.FC<InputProps> = ({
  className,
  placeholder,
  value = '',
  onChange,
  error,
  type = 'text',
  name,
  id,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const hasError = Boolean(error);
  const isEmpty = value === '';
  const isActive = isFocused;
  const showLabel = (isActive && placeholder) || value;
  const showPlaceholder = isEmpty;

  const rootClassName = () =>
    [s.root, isActive && s.active, hasError && s.error, className]
      .filter(Boolean)
      .join(' ');

  const inputClassName = () =>
    [
      s.input,
      hasError && s.inputError,
      showLabel && s.inputWithLabel,
      !isEmpty && s.inputWithValue,
    ]
      .filter(Boolean)
      .join(' ');

  const inputWrapperClassName = () =>
    [s.inputWrapper, isActive && s.inputWrapperActive]
      .filter(Boolean)
      .join(' ');

  return (
    <div className={rootClassName()}>
      {showLabel && (
        <label
          htmlFor={id || name}
          className={`${s.label} ${!isActive ? s.labelInactive : ''}`}
        >
          {placeholder}
        </label>
      )}
      <div className={inputWrapperClassName()}>
        <input
          ref={inputRef}
          id={id || name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={showPlaceholder ? placeholder : ''}
          className={inputClassName()}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id || name}-error` : undefined}
        />
      </div>
      {hasError && (
        <div id={`${id || name}-error`} className={s.errorMessage} role="alert">
          {error}
        </div>
      )}
    </div>
  );
};
