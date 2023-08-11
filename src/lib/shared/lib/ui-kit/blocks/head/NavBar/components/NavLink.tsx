import { FC } from 'react';
import Link from 'next/link';
import { INavStyleType } from '../navList';
import cl from 'classnames';
import styles from '../NavBar.module.scss';

interface INavLinkProps {
  link: string;
  title: string;
  styleType: INavStyleType;
  isMobile?: boolean;
}

export const NavLink: FC<INavLinkProps> = (nav) => {
  return (
    <Link
      href={nav.link}
      className={cl(styles.link, {
        [styles['link--' + nav.styleType]]: !!nav.styleType,
        [styles[`link--${nav.styleType}-mobile`]]:
          !!nav.styleType && nav.isMobile,
      })}
    >
      {nav.title}
    </Link>
  );
};
