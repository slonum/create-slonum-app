import { useCallback, useEffect } from 'react';

export function useCloseToggle(
  setToggleButton: (arg0: boolean) => void,
  toggleButton: unknown,
  ref: { current: { contains: (arg0: EventTarget | null) => any } },
) {
  const clickHandler = useCallback((e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setToggleButton(false);
      document.removeEventListener('click', clickHandler);
    }
  }, []);

  useEffect(() => {
    if (toggleButton) {
      document.addEventListener('click', clickHandler);
    } else {
      document.removeEventListener('click', clickHandler);
    }
  }, [toggleButton]);

  useEffect(() => {
    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);
}
