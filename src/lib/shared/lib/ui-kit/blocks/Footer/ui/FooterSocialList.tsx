import { FC } from 'react';
import styles from './Footer.module.scss';
import { footerSocialList } from '../model';
import { SocialItem } from '@ui/blocks/Social';

export const FooterSocialList: FC = () => {
  return (
    <div className={styles.footer__socialList}>
      <ul className={styles.footer__socialIcons}>
        {footerSocialList.map((item) => (
          <SocialItem
            key={item.socialName}
            socialName={item.socialName}
            href={item.href}
          />
        ))}
      </ul>
    </div>
  );
};
