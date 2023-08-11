import { useState, useEffect } from 'react';
import { debounce } from './useDebounce';

interface IOptionsWindowResize {
  minWidth?: number;
  minHeight?: number;
}

export function useWindowResize(options?: IOptionsWindowResize) {
  const [dimension, setDimension] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      if (options) {
        if (options.minWidth && options.minWidth > window.innerWidth) {
          setDimension([window.innerWidth, window.innerHeight]);
        }
      } else {
        setDimension([window.innerWidth, window.innerHeight]);
      }
    }, 100);
    window.addEventListener('resize', debouncedResizeHandler);
    return () => window.removeEventListener('resize', debouncedResizeHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return dimension;
}

export function useWindowResizeCheckMin(minWidth: number) {
  const [dimension, setDimension] = useState<boolean>();
  useEffect(() => {
    setDimension(minWidth > window.innerWidth);
    const debouncedResizeHandler = debounce(() => {
      setDimension(minWidth > window.innerWidth);
    }, 100);
    window.addEventListener('resize', debouncedResizeHandler);
    return () => window.removeEventListener('resize', debouncedResizeHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return dimension;
}
