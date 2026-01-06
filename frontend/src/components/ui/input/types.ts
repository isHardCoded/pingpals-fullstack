export type InputProps = {
  className?: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  name?: string;
  id?: string;
};
