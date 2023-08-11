import React, { useRef, useState } from 'react';
import { useObserver } from '@slonum/kit';
import { MobileMenu } from '@ui/components/MobileMenu';
import { ActionButton } from '@ui/components/action-buttons';
import { IHeaderProps } from './types';
import { InnerHeader } from './Components/InnerHeader';
import styles from './header.module.scss';

/**
 * @param auth - состояние авторизации
 * @param module - тип модуля, нужен для кнопок мобильной навигации (учатсвовать и др.)
 * @param type - тип хедера: обычный (main), с intersectionObserver (draw), для кабинета - невидимый (cabinet)
 * @param bottomMenu -  мобильнaя навигация
 * @param isAdminBlogNavbar - флаг навбара для админки блога
 * @param logoLink - ссылка логотипа
 * @param navbar - для внутренней логики, не используется
 */

export const Header: React.FC<IHeaderProps> = ({
  isAuth,
  isAdminBlogNavbar,
  type,
  logoLink,
  bottomMenu,
}) => {
  const navbar = isAdminBlogNavbar ? 'adminBlog' : 'main';
  const isDraw = type === 'draw';
  const ref = useRef<any>();
  const refHeader = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const toggle = (visible: boolean) => {
    if (refHeader.current) {
      if (visible) {
        setVisible(false);
        refHeader.current.classList.add(styles['header__wrapper--visible']);
      } else {
        setVisible(true);
        refHeader.current.classList.remove(styles['header__wrapper--visible']);
      }
    }
  };

  useObserver({
    ref: ref,
    isInterTrue: () => toggle(false),
    isInterFalse: () => toggle(true),
  });

  return (
    <div className={styles.header}>
      {isDraw ? (
        <>
          <div className={styles.header__draw}>
            <InnerHeader logoLink={logoLink} isAuth={isAuth} type={type} />
          </div>
          <div className={styles.header__wrapper} ref={refHeader}>
            <InnerHeader
              logoLink={logoLink}
              isAuth={isAuth}
              navbar={navbar}
              type={'main'}
              visible={visible}
              reference={refHeader}
            />
          </div>
        </>
      ) : (
        <InnerHeader
          logoLink={logoLink}
          isAuth={isAuth}
          navbar={navbar}
          type={type}
        />
      )}
      {bottomMenu && (
        <MobileMenu>
          <ActionButton {...bottomMenu.left} />
          <ActionButton {...bottomMenu.right} />
        </MobileMenu>
      )}
      <div className={styles.header__ref} ref={ref} />
    </div>
  );
};
