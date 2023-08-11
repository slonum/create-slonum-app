import { getCookie } from '@slonum/kit';
import { useAppDispatch } from '@ui/redux';
import { authActions } from '@ui/redux/Auth/slice';
import { useEffect } from 'react';

export function useAuthUser(isAuth: boolean) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cc = getCookie('_nt');
    if (isAuth || cc) {
      dispatch(authActions.refresh());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
