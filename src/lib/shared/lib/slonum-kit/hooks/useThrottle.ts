import { useEffect, useRef, useCallback } from 'react';

const throttle = (callback: (props?: any) => void, delay: number) => {
  let isThrottled = false;
  return (...args: any) => {
    if (isThrottled) return;
    isThrottled = true;
    callback(...args);
    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
};

export function useThrottle(callback: (props?: any) => void, delay: number) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });
  return useCallback(
    throttle((...args) => callbackRef.current(...args), delay),
    [delay],
  );
}
