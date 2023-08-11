import { FC } from 'react';
import { SvgChevronDown } from '@ui/components/svg';
import { INavLink, INavStyleType } from '../navList';
import { NavLink } from './NavLink';
import styles from '../NavBar.module.scss';
import cl from 'classnames';
import { isProduction } from '@slonum/kit';

interface INavDropProps {
  title: string;
  inner: INavLink[];
  styleType: INavStyleType;
  className?: string;
}

export const NavDrop: FC<INavDropProps> = (nav) => {
  return (
    <ul className={cl(nav.className, styles.drop)}>
      <li className={styles.drop__title}>
        {nav.title}
        <SvgChevronDown />
      </li>
      <ul className={styles.drop__list} key={nav.title}>
        {nav.inner.map((item) => {
          if (item.isDev && isProduction) return null;
          return (
            <li key={item.title} className={styles.drop__item}>
              <NavLink
                link={item.link}
                title={item.title}
                styleType="padding"
              />
            </li>
          );
        })}
      </ul>
    </ul>
  );
};
