import { useId } from 'react';

const InputField = () => {
  const id = useId();

  return (
    <>
      <input id={id} type="text" value="C://" aria-label="lorem ipsum" />
    </>
  );
};

export default InputField;
