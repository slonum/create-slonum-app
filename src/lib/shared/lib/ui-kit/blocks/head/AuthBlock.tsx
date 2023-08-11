import { FCC } from '@slonum/kit';
import { AuthButton } from '@ui/components/action-buttons';
import { LoggedProfileMenu } from './LoggedProfile';
import cl from 'classnames';
import styles from './Header.module.scss';

interface IAuthBlockProps {
  isAuth: boolean;
  openMenu: () => void;
}

export const AuthBlock: FCC<IAuthBlockProps> = ({ isAuth, openMenu }) => {
  return (
    <div
      className={cl(styles.auth, {
        [styles.auth__logged]: isAuth,
        [styles.auth__unlogged]: !isAuth,
      })}
    >
      {isAuth ? (
        <LoggedProfileMenu
          className={styles.auth__profile}
          module="page"
          openBurgerMenu={openMenu}
        />
      ) : (
        <AuthButton isAuth={isAuth} className={styles.header__authBtn} />
      )}
    </div>
  );
};
