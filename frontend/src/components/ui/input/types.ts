export interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  type?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  placeholder: string;
  className?: string;
}
