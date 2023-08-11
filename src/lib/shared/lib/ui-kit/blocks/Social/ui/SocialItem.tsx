import { FC, ReactNode } from 'react';

import {
  SvgDz,
  SvgMail,
  SvgOk,
  SvgPin,
  SvgRutube,
  SvgTg,
  SvgTiktok,
  SvgVk,
  SvgYoutube,
} from '@ui/components/svg';

import styles from './Social.module.scss';

interface ISocialItemProps {
  socialName: string;
  href: string;
}

export const SocialItem: FC<ISocialItemProps> = ({ socialName, href }) => {
  const icon: Record<string, ReactNode> = {
    ok: <SvgOk />,
    vk: <SvgVk />,
    dzen: <SvgDz />,
    telegram: <SvgTg />,
    pinterest: <SvgPin />,
    rutube: <SvgRutube />,
    youtube: <SvgYoutube />,
    tiktok: <SvgTiktok />,
    mail: <SvgMail />,
  };
  return (
    <li className={styles.socialItem}>
      <a href={`${href}`} target="_blank" rel="noreferrer">
        {icon[socialName]}
      </a>
    </li>
  );
};
