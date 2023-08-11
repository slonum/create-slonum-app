import React, { memo } from 'react';
import { FCC } from '@slonum/kit';
import { LoggedProfile } from './LoggedProfile';
import { NavBar } from './NavBar';
import { UnloggedMenu } from './UnloggedMenu';
import styles from '../header.module.scss';

interface IAuthBlockProps {
  isAuth: boolean;
  isAdmin?: boolean;
}

export const AuthBlock: FCC<IAuthBlockProps> = memo(function AuthBlock({
  isAuth,
  isAdmin,
}) {
  return (
    <div className={styles.auth}>
      {isAuth ? (
        <LoggedProfile className={styles.auth__profile} type="page">
          <NavBar isMobile isAdmin={isAdmin} />
        </LoggedProfile>
      ) : (
        <UnloggedMenu className={styles.auth__btn} type={'page'}>
          <NavBar isMobile isAdmin={false} />
        </UnloggedMenu>
      )}
    </div>
  );
});
