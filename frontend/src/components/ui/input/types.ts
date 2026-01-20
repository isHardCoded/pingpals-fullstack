export type InputType =
  | 'text'
  | 'number'
  | 'password'
  | 'email'
  | 'search'
  | 'tel'
  | 'url';

export interface InputProps {
  type?: InputType;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}
