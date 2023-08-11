import React from 'react';
import Link from 'next/link';
import { ThinBorderBlock } from '@ui/components/ThinBorderBlock';
import { FooterUpButton } from './FooterUpButton';
import cl from 'classnames';
import styles from './Footer.module.scss';
import { FooterSocialList } from './FooterSocialList';
import { FooterNavList } from './FooterNavList';
import { Logo } from '@ui/components/Logo';
import { H4 } from '@ui/components/titles';
import { MAIN } from '@slonum/kit';
import { footerNavBar } from '../model';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={cl(styles.footer)}>
      <ThinBorderBlock />
      <div className={cl(styles.footer__inner, styles.container)}>
        <div className={styles.footer__block}>
          <Logo className={styles.footer__logo} />
          <Link className={styles.footer__mail} href="mailto:info@slonum.ru">
            <H4>info@slonum.ru</H4>
          </Link>
          <FooterNavList navList={footerNavBar.contacts} />
        </div>

        <div className={styles.footer__block}>
          <H4 className={styles.footer__title}>Платформа</H4>
          <FooterNavList navList={footerNavBar.platform} />
        </div>

        <div className={styles.footer__block}>
          <H4 className={styles.footer__title}>Сотрудничество</H4>
          <FooterNavList navList={footerNavBar.coop} />
        </div>

        <div className={styles.footer__block}>
          <H4 className={styles.footer__title}>Наши соцсети</H4>
          <FooterSocialList />
        </div>

        <div className={styles.footer__upWrapper}>
          <FooterUpButton />
        </div>
      </div>
      <div className={cl(styles.footer__copyright, styles.container)}>
        <p className={styles.footer__copyrightText}>
          @ Все права защищены.&nbsp;
          <br /> ООО ”Слонум” {year}
        </p>
        <Link
          className={styles.footer__copyrightLink}
          href={`${MAIN}/terms/policy`}
        >
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
};
