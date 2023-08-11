import { useRef, useCallback, useEffect } from 'react';

export const debounce = (callback: (props?: any) => void, delay: number) => {
  let isDebounced: any = null;
  return (...args: any) => {
    clearTimeout(isDebounced);
    isDebounced = setTimeout(() => callback(...args), delay);
  };
};

export function useDebounce(callback: (props?: any) => void, delay: number) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });
  return useCallback(
    debounce((...args) => callbackRef.current(...args), delay),
    [delay],
  );
}
