import { FC } from 'react';
import cl from 'classnames';
import styles from '../TrainingProgress.module.scss';

export const RowProgress: FC<{
  children: React.ReactNode;
  type: 'subWord' | 'word';
}> = ({ children, type }) => {
  return (
    <div
      className={cl(
        styles.flex,
        styles.table__row,
        styles['table__row--' + type],
      )}
    >
      {children}
    </div>
  );
};
