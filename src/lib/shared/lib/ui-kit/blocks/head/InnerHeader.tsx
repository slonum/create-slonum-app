import { FC, memo, useState } from 'react';
import { AuthButton } from '@ui/components/action-buttons';
import { Logo } from '@ui/components/Logo';
import { NavBar } from './NavBar';
import { BurgerMenu } from './BurgerMenu';
import { AuthBlock } from './AuthBlock';
import { ButtonBurgerOpen } from './ButtonBurgerOpen';
import cl from 'classnames';
import styles from './Header.module.scss';

interface IInnerHeaderProps {
  isAuth: boolean;
  authType?: 'block' | 'button';
  classNameAuthButton?: string;
}

export const InnerHeader: FC<IInnerHeaderProps> = memo(function InnerHeader({
  isAuth,
  authType = 'block',
  classNameAuthButton,
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  return (
    <div className={cl(styles.header__inner, styles.container)}>
      <div className={styles.header__menu}>
        <Logo className={styles.header__logo} />
        {authType === 'button' && (
          <AuthButton
            className={cl(classNameAuthButton, styles.header__authBtn)}
            isAuth={isAuth}
          />
        )}
        {authType === 'block' && (
          <>
            <NavBar />
            <AuthBlock isAuth={isAuth} openMenu={openMenu} />
            <ButtonBurgerOpen isAuth={isAuth} openMenu={openMenu} />
          </>
        )}
      </div>
      {authType === 'block' && (
        <BurgerMenu isOpen={isOpen} closeMenu={closeMenu} />
      )}
    </div>
  );
});
