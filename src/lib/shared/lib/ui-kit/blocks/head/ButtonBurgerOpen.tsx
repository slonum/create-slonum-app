import { FC } from 'react';
import { SvgBurgerOpen } from '@ui/components/svg/Burger/Open';
import cl from 'classnames';
import styles from './Header.module.scss';

interface IButtonBurgerOpenProps {
  isAuth: boolean;
  openMenu: () => void;
}

export const ButtonBurgerOpen: FC<IButtonBurgerOpenProps> = ({
  isAuth,
  openMenu,
}) => {
  return (
    <button
      className={cl(styles.header__burger, {
        [styles['header__burger-auth']]: isAuth,
      })}
      onClick={openMenu}
    >
      <SvgBurgerOpen />
    </button>
  );
};
