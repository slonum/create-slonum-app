import Link from 'next/link';
import { FC } from 'react';
import cl from 'classnames';
import styles from './Footer.module.scss';
import { IFooterNavItem } from '../model';

interface IFooterItem {
  item: IFooterNavItem;
}
export const FooterNavItem: FC<IFooterItem> = ({ item }) => {
  return (
    <li
      key={item.title}
      className={cl(
        styles.navItem,
        item.isDonation && styles['navItem--donation'],
      )}
    >
      <Link href={item.link}>{item.title}</Link>
    </li>
  );
};

export default FooterNavItem;
