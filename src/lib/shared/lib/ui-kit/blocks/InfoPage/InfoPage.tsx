import Link from 'next/link';
import { FC } from 'react';
import { H1, H2, H3 } from '../../components/titles';
import cl from 'classnames';
import styles from './InfoPage.module.scss';

// import { useLink } from '../../hooks';

export interface IInfoPageProps {
  title: React.ReactNode | string;
  description: React.ReactNode | string;
  isNoneLink?: boolean;
}

export const InfoPage: FC<IInfoPageProps> = ({
  title,
  description,
  isNoneLink,
}) => {
  // const Link = useLink();

  return (
    <div className={cl(styles.container, styles.info)}>
      <div className={styles.info__content}>
        <H1 className={styles.info__title}>{title}</H1>
        <H2 className={styles.info__description}>{description}</H2>
        {!isNoneLink && (
          <Link href="/" className={styles.header__logo} shallow>
            <H3>На главную</H3>
          </Link>
        )}
      </div>
    </div>
  );
};
