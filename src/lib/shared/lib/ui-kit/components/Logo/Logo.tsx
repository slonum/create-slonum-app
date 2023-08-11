import Link from 'next/link';
import { FC } from 'react';
import { SvgLogo } from '../svg';
import cl from 'classnames';
import styles from './Logo.module.scss';
import { MAIN } from '@slonum/kit';

interface ISvgLogoProps {
  className?: string;
  link?: string;
  type?: 'page' | 'cabinet' | 'drawing';
}
export const Logo: FC<ISvgLogoProps> = ({ className, link, type = 'page' }) => {
  const mainColor = '#14A76C',
    additionalColor = '#FF672E';

  return (
    <Link
      href={link ?? MAIN}
      className={cl(
        className,
        styles.logo__wrapper,
        styles['logo__wrapper--' + type],
      )}
    >
      <div className={cl(styles.logo, styles['logo--' + type])}>
        <SvgLogo
          className={styles.logo__icon}
          mainColor={mainColor}
          aditionalColor={additionalColor}
        />
        <div className={cl(styles.logo__side, styles['logo__side--' + type])}>
          <span className={styles.logo__title}>Слон</span>
          <span
            style={{ color: additionalColor }}
            className={styles.logo__subTitle}
          >
            {' '}
            {'Ум'}
          </span>
        </div>
      </div>
    </Link>
  );
};
