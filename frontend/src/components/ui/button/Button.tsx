import type { ButtonProps } from './types';
import s from './styles.module.css';

import { cn } from '../../../shared/lib';

export function Button({
  children,
  appearance = 'primary',
  disabled = false,
  onClick,
  type = 'button',
  href,
  className,
}: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className={cn(s.root, s[appearance], className)}
        onClick={onClick}
        aria-disabled={disabled}
        role={disabled ? 'link' : undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cn(s.root, s[appearance], className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
