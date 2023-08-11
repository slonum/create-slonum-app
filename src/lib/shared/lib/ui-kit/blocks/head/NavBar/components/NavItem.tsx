import { FC } from 'react';
import { isProduction } from '@slonum/kit';
import { INavItem } from '../navList';
import { NavDrop } from './NavDrop';
import { NavLink } from './NavLink';
import { NavAccordion } from './NavAccordion';
import styles from '../NavBar.module.scss';

interface INavItemProps {
  isMobile: boolean;
  isAuth: boolean;
  item: INavItem;
}

export const NavItem: FC<INavItemProps> = ({ isAuth, isMobile, item }) => {
  const isHide = !isMobile && item.isHide;
  const className = isHide ? styles.navbar__hide : styles.navbar__link;

  if ((item.isAuth && !isAuth) || (item.styleType === 'hide-main' && !isMobile))
    return null;

  if ('inner' in item) {
    const props = {
      key: item.title,
      title: item.title,
      inner: item.inner,
      styleType: item.styleType,
      className: className,
    };
    return isMobile ? <NavAccordion {...props} /> : <NavDrop {...props} />;
  }
  if (item.isDev && isProduction) return null;

  return (
    <ul className={className} key={item.title}>
      <NavLink
        link={item.link}
        title={item.title}
        styleType={item.styleType}
        isMobile={isMobile}
      />
    </ul>
  );
};
