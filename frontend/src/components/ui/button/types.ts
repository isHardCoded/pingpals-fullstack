export type ButtonAppearance = 'primary' | 'secondary' | 'link';

export type ButtonProps = {
  children: React.ReactNode;
  appearance?: ButtonAppearance;
  disabled?: boolean;
  onClick?: VoidFunction;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  className?: string;
};
