import { useEffect, useRef } from 'react';

const useOutsideClick = (handler: (event: MouseEvent | TouchEvent) => void) => {
  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handler]);

  return ref;
};

export default useOutsideClick;
