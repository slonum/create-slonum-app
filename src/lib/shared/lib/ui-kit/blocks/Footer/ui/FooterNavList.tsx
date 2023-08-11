import { FC } from 'react';
import styles from './Footer.module.scss';
import FooterNavItem from './FooterNavItem';
import { IFooterNavItem } from '../model';

interface IFooterNavList {
  navList: IFooterNavItem[];
}
export const FooterNavList: FC<IFooterNavList> = ({ navList }) => {
  return (
    <ul className={styles.navList}>
      {navList.map((item) => (
        <FooterNavItem item={item} key={item.title} />
      ))}
    </ul>
  );
};
