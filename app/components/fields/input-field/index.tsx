import { InputHTMLAttributes, useId } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & { className?: string };

const InputField = ({ className, ...props }: Props) => {
  const id = useId();

  return <input id={id} className={className} {...props} />;
};

export default InputField;
