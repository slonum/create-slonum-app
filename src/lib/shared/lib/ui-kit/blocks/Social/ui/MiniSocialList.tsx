import { OLYMPIAD_MATH } from '@slonum/kit';
import cl from 'classnames';
import styles from './Social.module.scss';
import { shareLinkList } from '../models';
import { SocialItem } from './SocialItem';

export const MiniSocialList = () => {
  return (
    <ul className={cl(styles.socialIcons, styles['socialIcons--mini'])}>
      {shareLinkList(OLYMPIAD_MATH).map((item) => (
        <SocialItem
          key={item.socialName}
          socialName={item.socialName}
          href={item.href}
        />
      ))}
    </ul>
  );
};
