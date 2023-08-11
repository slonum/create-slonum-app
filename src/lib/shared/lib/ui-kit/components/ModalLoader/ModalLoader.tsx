import { FC } from 'react';
import cl from 'classnames';
import styles from './ModalLoader.module.scss';
import { Loader } from '../Loader';

export const ModalLoader: FC<{ isLoading?: boolean }> = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div className={cl(styles.flex, styles.loader__wrapper)}>
      <Loader className={styles.loader__spin} />
      <div className={styles.loader__overlay} />
    </div>
  );
};
