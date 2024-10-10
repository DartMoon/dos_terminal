'use client';

import { FocusEvent, FormEvent } from 'react';
import InputField from '@/app/components/fields/input-field';

const DEFAULT_VALUE = 'C:\\>';

const TerminalForm = () => {
  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    e.target.value = DEFAULT_VALUE;
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <form className="mt-auto" onSubmit={onSubmitHandler}>
      <InputField
        type="text"
        defaultValue={DEFAULT_VALUE}
        aria-label="dir"
        onBlur={onBlurHandler}
        className="w-full bg-dark-color text-gray-color text-4xl leading-none"
      />
    </form>
  );
};

export default TerminalForm;
