import type { ButtonProps } from './types';
import s from './styles.module.css';

export function Button({
  children,
  appearance = 'primary',
  disabled = false,
  onClick,
  type = 'button',
  href,
  className,
}: ButtonProps) {
  const buttonClassNames = () => {
    const classes = [s.root, s[appearance], className].filter(Boolean);
    return classes.join(' ');
  };

  if (href) {
    return (
      <a
        href={href}
        className={buttonClassNames()}
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
      className={buttonClassNames()}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
