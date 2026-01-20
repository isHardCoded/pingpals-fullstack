import type { ReactNode } from 'react';

export type ModalAction = {
  label: string;
  onClick: VoidFunction;
  disabled?: boolean;
};

export type ModalProps = {
  isOpen: boolean;
  title?: string;
  description?: ReactNode;

  primaryAction?: ModalAction;
  secondaryAction?: ModalAction;

  onClose?: VoidFunction;
  className?: string;
};
