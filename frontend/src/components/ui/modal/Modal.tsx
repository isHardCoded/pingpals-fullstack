import type { ModalProps } from './types';
import { Button } from '../button';
import s from './styles.module.css';

export function Modal({
  isOpen,
  title,
  description,
  primaryAction,
  secondaryAction,
  onClose,
  className,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={s.overlay} onClick={onClose}>
      <div
        className={[s.root, className].filter(Boolean).join(' ')}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {(title || onClose) && (
          <div className={s.header}>
            {title && <h6 className={s.title}>{title}</h6>}
            {onClose && (
              <button
                className={s.close}
                onClick={onClose}
                aria-label="Close modal"
              >
                <img src="icons/close.svg" alt="" />
              </button>
            )}
          </div>
        )}

        {description && <div className={s.description}>{description}</div>}

        {(primaryAction || secondaryAction) && (
          <div className={s.footer}>
            {secondaryAction && (
              <Button
                appearance="secondary"
                onClick={secondaryAction.onClick}
                disabled={secondaryAction.disabled}
              >
                {secondaryAction.label}
              </Button>
            )}

            {primaryAction && (
              <Button
                appearance="primary"
                onClick={primaryAction.onClick}
                disabled={primaryAction.disabled}
              >
                {primaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
