import { FC } from 'react';
import cl from 'classnames';
import styles from '../TrainingProgress.module.scss';

export const ScaleItem: FC<{ isActive?: boolean; isNew?: boolean }> = ({
  isActive,
  isNew,
}) => {
  return (
    <div
      className={cl(styles.scale__item, {
        [styles.scale__active]: isActive,
        [styles.scale__new]: isNew,
      })}
    ></div>
  );
};
