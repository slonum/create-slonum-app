import { FC } from 'react';
import { IUserInfoResponseSuccess } from '@slonum/kit';
import { SvgBurgerClose } from '@ui/components/svg/Burger/Close';
import { UserAvatar } from '@ui/components/avatar/User';
import styles from './BurgerMenu.module.scss';
import { screenSm } from '@ui/constants';

interface IButtonBurgerCloseProps {
  user?: IUserInfoResponseSuccess;
  closeMenu: () => void;
}

export const ButtonBurgerClose: FC<IButtonBurgerCloseProps> = ({
  user,
  closeMenu,
}) => {
  const clientWidth = document.documentElement.clientWidth;
  const userAuthorizedAndScreenSm = !!user && clientWidth < screenSm;

  return (
    <button onClick={closeMenu}>
      {userAuthorizedAndScreenSm ? (
        <UserAvatar user={user} className={styles.menu__avatar} />
      ) : (
        <SvgBurgerClose />
      )}
    </button>
  );
};
