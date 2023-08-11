import { useEffect, useState } from 'react';
import { useThrottle } from './useThrottle';

export const useDetectResolution = (pixelWidth: number) => {
  const [matches, setMatches] = useState(
    window.matchMedia(`(max-width: ${pixelWidth}px)`).matches,
  );
  const throttleObserver = useThrottle(
    () =>
      setMatches(
        () => window.matchMedia(`(max-width: ${pixelWidth}px)`).matches,
      ),
    300,
  );
  useEffect(() => {
    window.addEventListener('resize', throttleObserver);
    return () => window.removeEventListener('resize', throttleObserver);
  }, [throttleObserver]);
  return matches;
};
