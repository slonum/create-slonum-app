import { FC } from 'react';
import { CellProgress } from './CellProgress';
import cl from 'classnames';
import styles from '../TrainingProgress.module.scss';

export const HeadProgress: FC = () => {
  return (
    <div className={cl(styles.flex, styles.table__head)}>
      <CellProgress head="Слово" />
      <CellProgress head="Ваш ответ" />
      <CellProgress head="Прогресс" />
    </div>
  );
};
