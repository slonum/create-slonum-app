import { FC } from 'react';
import { ILessonAnswerList } from '@slonum/kit';
import { ScrollBar } from '@ui/blocks/ScrollBar';
import { CellProgress } from './CellProgress';
import { HeadProgress } from './HeadProgress';
import { RowProgress } from './RowProgress';
import cl from 'classnames';
import styles from '../TrainingProgress.module.scss';

interface ITableProgressProps {
  items: ILessonAnswerList[];
  className?: string;
  type: 'subWord' | 'word';
}

export const TableProgress: FC<ITableProgressProps> = ({
  items,
  type,
  className,
}) => {
  return (
    <div className={cl(className, styles.table)}>
      <div className={cl(styles.flex, styles.table__grid)}>
        <HeadProgress />
        {items.length > 1 && <HeadProgress />}
      </div>

      <ScrollBar className={styles.table__scroll} isCheck stl={styles}>
        <div className={cl(styles.flex, styles.table__grid)}>
          {items.map((item) => (
            <RowProgress key={item.word} type={type}>
              <CellProgress word={item.word} subWord={item.translation} />
              <CellProgress answerCorrect={{ ...item }} />
              <CellProgress
                progress={{ value: item.progress, answer: item.isCorrect }}
              />
            </RowProgress>
          ))}
        </div>
      </ScrollBar>
    </div>
  );
};
