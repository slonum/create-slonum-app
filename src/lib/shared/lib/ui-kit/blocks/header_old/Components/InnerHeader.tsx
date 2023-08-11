import React, { FC, memo } from 'react';
import { useRouter } from 'next/router';
import { AuthButton } from '@ui/components/action-buttons';
import { useGetRole } from '@ui/hooks/useGetRole';
import { IHeaderProps } from '../types';
import { Logo } from '@ui/components/Logo';
import { NavBar } from './NavBar';
import { AuthBlock } from './AuthBlock';
import cl from 'classnames';
import styles from '../header.module.scss';

interface IInnerHeaderProps extends IHeaderProps {
  visible?: boolean;
  reference?: any;
}

export const InnerHeader: FC<IInnerHeaderProps> = memo(function InnerHeader({
  isAuth,
  type,
  navbar,
  logoLink,
}) {
  const router = useRouter();
  const isAdmin = useGetRole('ADMIN');

  return (
    <div className={cl(styles.header, styles.container)}>
      <div
        className={cl(styles.header__menu, {
          [styles['header__menu--login']]: isAuth,
        })}
      >
        <Logo className={styles.header__logo} link={logoLink} />
        {navbar && <NavBar type={navbar} isAdmin={isAdmin} />}
        {type === 'draw' ? (
          <AuthButton
            className={cl(styles.header__btn, {
              [styles.draw]: type === 'draw' && router.asPath === '/',
            })}
            isAuth={isAuth}
          />
        ) : (
          <AuthBlock isAuth={isAuth} isAdmin={isAdmin} />
        )}
      </div>
    </div>
  );
});
