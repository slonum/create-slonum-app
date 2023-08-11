import { FC } from 'react';
import { ILessonAnswerList } from '@slonum/kit';
import { MobileMenu } from '@ui/components/MobileMenu';
import { H2 } from '@ui/components/titles';
import { Button } from '@ui/components/Button';
import { TableProgress } from './components/TableProgress';
import cl from 'classnames';
import styles from './TrainingProgress.module.scss';

interface ITrainingProgressProps {
  stats: ILessonAnswerList[];
  className?: string;
  rightButton?: {
    handler: () => void;
    title: string;
  };
  nextHandler: () => void;
}

export const TrainingProgress: FC<ITrainingProgressProps> = ({
  stats,
  className,
  rightButton,
  nextHandler,
}) => {
  return (
    <div className={cl(className, styles.progress)}>
      <H2 className={styles.progress__title}>Прогресс изучения слов</H2>
      <TableProgress
        className={styles.progress__table}
        items={stats}
        type={'subWord'}
      />
      <MobileMenu isVisible className={styles.progress__buttons}>
        {rightButton && (
          <Button
            variant="notlight"
            className={styles.progress__button}
            onClick={rightButton.handler}
          >
            {rightButton.title}
          </Button>
        )}
        <Button
          className={styles.progress__button}
          onClick={() => nextHandler()}
        >
          Продолжить
        </Button>
      </MobileMenu>
    </div>
  );
};
