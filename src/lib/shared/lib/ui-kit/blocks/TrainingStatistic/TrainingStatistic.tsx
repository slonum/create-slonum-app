import { FC } from 'react';
import Image from 'next/image';
import { StatisticsTrainingTotal, StatisticsTrainingLast } from '.';
import {
  SvgStatisticPartL,
  SvgStatisticPartR,
  SvgStatisticWordsL,
  SvgStatisticWordsR,
} from './svg';
import styles from './TrainingStatistic.module.scss';
import classNames from 'classnames';
import { MobileMenu } from '@ui/components/MobileMenu';
import { ITrainingStatisticBlockProps } from '@slonum/kit';

import st1 from './svg/elephant-st-1.webp';
import st2 from './svg/elephant-st-2.webp';
import { H2 } from '@ui/components/titles';
import { Button } from '@ui/components/Button';

interface ITrainingStatisticProps {
  title: string;
  isFinished: boolean;
  nextHandler: () => void;
  rightButton?: {
    handler: () => void;
    title: string;
  };
  statsLast: ITrainingStatisticBlockProps;
  statsAll: ITrainingStatisticBlockProps;
  className?: string;
}

export const TrainingStatisticBlock: FC<ITrainingStatisticProps> = ({
  title,
  isFinished,
  statsAll,
  statsLast,
  className,
  rightButton,
  nextHandler,
}) => {
  return (
    <div className={classNames(className, styles.statistic)}>
      <div className={styles.statistic__left}>
        <div className={styles.statistic__image}>
          <Image
            src={isFinished ? st1 : st2}
            fill
            priority={true}
            alt="elephant"
          />
        </div>

        {isFinished ? (
          <>
            <SvgStatisticPartL />
            <SvgStatisticPartR />
          </>
        ) : (
          <>
            <SvgStatisticWordsR />
            <SvgStatisticWordsL />
          </>
        )}
      </div>
      <div className={styles.statistic__right}>
        <H2 className={styles.statistic__title}>
          {/* {isFinished ? title : 'Поздравлю! ' + title} */}
          {title}
        </H2>
        <div className={styles.statistic__content}>
          <div className={styles.statistic__inner}>
            <StatisticsTrainingLast {...statsLast} />
            <StatisticsTrainingTotal {...statsAll} />
          </div>
          <div className={styles.statistic__btnwrap}>
            <MobileMenu isVisible className={styles.statistic__buttons}>
              {rightButton && (
                <Button
                  variant="notlight"
                  className={styles.statistic__close}
                  onClick={rightButton.handler}
                >
                  {rightButton.title}
                </Button>
              )}
              <Button
                className={styles.statistic__close}
                onClick={() => nextHandler()}
              >
                Продолжить
              </Button>
            </MobileMenu>
          </div>
        </div>
      </div>
    </div>
  );
};
