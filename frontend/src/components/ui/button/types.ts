export type ButtonAppearance = 'primary' | 'secondary';

export type ButtonProps = {
  children: React.ReactNode;
  appearance?: ButtonAppearance;
  disabled?: boolean;
  onClick?: VoidFunction;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  className?: string;
};
