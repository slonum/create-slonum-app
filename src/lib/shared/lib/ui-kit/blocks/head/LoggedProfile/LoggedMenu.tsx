import { FC } from 'react';
import { CABINET, IUserInfoResponseSuccess } from '@slonum/kit';
import { useAppDispatch } from '@ui/redux';
import { ILoggedModule } from './types';
import cl from 'classnames';
import styles from './LoggedProfile.module.scss';
import Link from 'next/link';
import { authActions } from '@ui/redux/Auth/slice';

interface ILoggedMenuProps {
  isActive: boolean;
  user: IUserInfoResponseSuccess;
  module: ILoggedModule;
}

export const LoggedMenu: FC<ILoggedMenuProps> = ({ isActive, user }) => {
  const dispatch = useAppDispatch();
  const logout = async () => {
    await dispatch(authActions.logout());
  };
  const profileName = user?.fullName ?? 'Мой профиль';
  return (
    <ul
      className={cl(styles.menu, {
        [styles['menu--active']]: isActive,
      })}
    >
      <li className={styles.menu__item}>
        <p className={styles.menu__title}>{profileName}</p>
      </li>
      <li className={styles.menu__item}>
        <Link className={styles.menu__value} href={CABINET}>
          Личный кабинет
        </Link>
      </li>
      <li className={styles.menu__item}>
        <button className={styles.menu__value} onClick={logout}>
          Выйти
        </button>
      </li>
    </ul>
  );
};
