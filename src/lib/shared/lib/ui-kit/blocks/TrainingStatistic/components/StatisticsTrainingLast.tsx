import { FC } from 'react';
import { ITrainingStatisticBlockProps } from '@slonum/kit';
import { H4 } from '@ui/components/titles';
import cl from 'classnames';
import styles from '../TrainingStatistic.module.scss';

export const StatisticsTrainingLast: FC<ITrainingStatisticBlockProps> = ({
  errorCount,
  studyingCount,
  totalCount,
  type = 'voc',
}) => {
  const total = {
    voc: 'Слов в тренировке',
    en: 'Слов пройдено',
  };
  const studying = {
    voc: 'Слов без ошибок',
    en: 'Знаю',
  };
  const error = {
    voc: 'Слов с ошибкой',
    en: 'Не знаю',
  };
  return (
    <>
      <H4 className={styles.statistic__count}>
        <span>{total[type]}</span>
        <span>{totalCount}</span>
      </H4>
      <p
        className={cl(
          styles.statistic__item,
          styles['statistic__item--success'],
        )}
      >
        <span>{studying[type]}</span>
        <span>{studyingCount}</span>
      </p>
      <p
        className={cl(styles.statistic__item, styles['statistic__item--error'])}
      >
        <span>{error[type]}</span>
        <span>{errorCount}</span>
      </p>
    </>
  );
};
