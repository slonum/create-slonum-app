import { useState } from 'react';
import { useWindowResizeAction } from './useWindowResizeAction';

export const useChangeValueByWindowResize = <T, P>(
  startValue: T,
  endValue: P,
  width: number,
) => {
  const [value, setValue] = useState<T | P>(startValue);

  const changeValue = () => {
    if (window.innerWidth > width) {
      setValue(startValue);
      return;
    }

    setValue(endValue);
  };

  useWindowResizeAction(changeValue);

  return { value };
};
