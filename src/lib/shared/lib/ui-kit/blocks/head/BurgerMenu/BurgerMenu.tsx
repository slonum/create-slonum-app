import { FC } from 'react';
import { useAppSelector } from '@ui/redux';
import { Overlay } from '@ui/components/Overlay';
import { Logo } from '@ui/components/Logo';
import { AuthButton } from '@ui/components/action-buttons';
import { NavBar } from '../NavBar';
import { ButtonBurgerClose } from './ButtonBurgerClose';
import { BurgerProfile } from './BurgerProfile';
import cl from 'classnames';
import styles from './BurgerMenu.module.scss';

interface IBurgerMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const BurgerMenu: FC<IBurgerMenuProps> = ({ isOpen, closeMenu }) => {
  const user = useAppSelector((state) => state.user?.profile);
  return (
    <>
      <div
        className={cl(styles.menu, {
          [styles['menu--open']]: isOpen,
        })}
      >
        <div className={styles.menu__head}>
          <Logo />
          <ButtonBurgerClose closeMenu={closeMenu} user={user} />
        </div>
        <BurgerProfile user={user} />
        <NavBar isMobile isAuth={!!user} />
        <AuthButton
          className={styles.menu__login}
          isAuth={!!user}
          actionType="logout"
          onClick={closeMenu}
        />
      </div>
      <Overlay isActive={isOpen} close={closeMenu} />
    </>
  );
};
