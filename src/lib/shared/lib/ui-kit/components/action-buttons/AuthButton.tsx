import { useNavigate, FCL, CABINET } from '@slonum/kit';
import { Button } from '@ui/components/Button_new';
import { modal } from '@ui/blocks/modal';
import { useAppDispatch } from '@ui/redux';
import React from 'react';
import { authActions } from '@ui/redux/Auth/slice';

interface IAuthButtonProps {
  isAuth?: boolean;
  actionType?: 'login' | 'logout';
  onClick?: () => void;
}

export const AuthButton: FCL<IAuthButtonProps> = ({
  className,
  isAuth,
  actionType = 'login',
  onClick,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    if (onClick) onClick();
    if (isAuth) {
      if (actionType === 'logout') {
        dispatch(authActions.logout());
      } else navigate(`${CABINET}`);
    } else {
      modal.open('PopupLogReg');
    }
  };

  let title = 'Войти';
  if (isAuth) {
    title = actionType === 'logout' ? 'Выйти' : 'Кабинет';
  }

  return (
    <Button
      className={className}
      background="white"
      color="dark"
      onClick={clickHandler}
    >
      {title}
    </Button>
  );
};
