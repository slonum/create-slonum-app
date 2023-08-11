import { FC } from 'react';
import cl from 'classnames';
import { navList, INavItem } from './navList';
import styles from './NavBar.module.scss';
import { NavItem } from './components/NavItem';

interface INavBarProps {
  isMobile?: boolean;
  isAuth?: boolean;
}

export const NavBar: FC<INavBarProps> = ({ isMobile, isAuth }) => {
  return (
    <nav
      className={cl(styles.navbar, {
        [styles['navbar--mobile']]: isMobile,
        [styles['navbar--desktop']]: !isMobile,
      })}
    >
      <ul className={styles.navbar__list}>
        {navList.map((item: INavItem, ind) => (
          <NavItem
            key={ind + item.title}
            isMobile={isMobile}
            isAuth={isAuth}
            item={item}
          />
        ))}
      </ul>
    </nav>
  );
};
