import { useRef } from 'react';

export const useDebounce = (func, delay) => {
  const timeoutId = useRef(null);

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
