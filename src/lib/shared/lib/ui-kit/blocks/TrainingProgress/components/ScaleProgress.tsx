import { FC } from 'react';
import cl from 'classnames';
import styles from '../TrainingProgress.module.scss';
import { ScaleItem } from './ScaleItem';

export const ScaleProgress: FC<{
  progress: number;
  answer?: boolean;
}> = ({ answer, progress }) => {
  return (
    <div className={styles.scale}>
      <ScaleItem isActive={progress > 0} isNew={answer && progress === 1} />
      <ScaleItem isActive={progress > 1} isNew={answer && progress === 2} />
      <ScaleItem isActive={progress > 2} isNew={answer && progress === 3} />
      <ScaleItem isActive={progress > 3} isNew={answer && progress === 4} />
      <ScaleItem isActive={progress === 5} isNew={answer && progress === 5} />
      {answer && <p className={styles.scale__plus}>+1</p>}
    </div>
  );
};
