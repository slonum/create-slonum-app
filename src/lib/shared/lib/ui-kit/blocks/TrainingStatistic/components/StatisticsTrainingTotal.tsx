import { FC } from 'react';
import { ITrainingStatisticBlockProps } from '@slonum/kit';
import { H4 } from '@ui/components/titles';
import styles from '../TrainingStatistic.module.scss';
import { InfoTooltip } from '@ui/components/InfoTooltip';

export const StatisticsTrainingTotal: FC<ITrainingStatisticBlockProps> = ({
  errorCount,
  studyingCount,
  totalCount,
  type = 'voc',
  grade,
}) => {
  const total = {
    voc: `Всего слов за ${grade} класс `,
    en: 'Слов в списке',
  };
  return (
    <>
      <H4 className={styles.statistic__count}>
        <span>{total[type]}</span>
        <span>{totalCount}</span>
      </H4>
      <div className={styles.statistic__item}>
        <p className={styles.statistic__itemInner}>
          <span>Изучено</span>
          <InfoTooltip
            className={styles.statistic__tooltip}
            classNameAnnotation={styles.statistic__tooltipAnnotation}
          >
            Чтобы выучить слово, его нужно повторить четыре раза
          </InfoTooltip>
        </p>
        <span>{studyingCount}</span>
      </div>
      <p className={styles.statistic__item}>
        <span>Осталось</span>
        <span>{errorCount}</span>
      </p>
    </>
  );
};
