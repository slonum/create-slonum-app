import { FC } from 'react';
import { UserAvatar } from '@ui/components/avatar/User';
import { IUserInfoResponseSuccess } from '@slonum/kit';
import styles from './BurgerMenu.module.scss';

interface IBurgerProfileProps {
  user: IUserInfoResponseSuccess | undefined;
}

export const BurgerProfile: FC<IBurgerProfileProps> = ({ user }) => {
  if (!user) return null;
  return (
    <div className={styles.menu__profile}>
      <UserAvatar user={user} className={styles.menu__avatar} />
      <p className={styles.menu__name}>{user.fullName ?? 'Мой профиль'}</p>
    </div>
  );
};
