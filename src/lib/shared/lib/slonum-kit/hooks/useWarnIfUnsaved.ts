import Router from 'next/router';
import { useEffect } from 'react';

export const useWarnIfUnsavedChanges = (
  unsavedChanges: boolean,
  callback: () => boolean,
  navigate: (url: string) => void,
) => {
  useEffect(() => {
    if (unsavedChanges) {
      const routeChangeStart = (url: string) => {
        const ok = callback();
        if (!ok) {
          Router.events.emit('routeChangeError');
          throw 'Abort route change. Please ignore this error.';
        } else {
          navigate(url);
        }
      };
      Router.events.on('routeChangeStart', routeChangeStart);

      return () => {
        Router.events.off('routeChangeStart', routeChangeStart);
      };
    }
  }, [unsavedChanges]);
};
