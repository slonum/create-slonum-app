import { FC } from 'react';
import cl from 'classnames';
import styles from './ProgressBar.module.scss';

interface IProgressBarProps {
  items: IProgressItem[];
  className?: string;
  height: number;
}

interface IProgressItem {
  percent: number;
  type: 'blue' | 'orange' | 'gray';
  caption: string;
}

export const ProgressBarDiagram: FC<IProgressBarProps> = ({
  items,
  height,
  className,
}) => {
  const max = items.reduce((acc, curr) =>
    acc.percent > curr.percent ? acc : curr,
  ).percent;

  const px = Math.floor(height / max);
  return (
    <div className={cl(styles.diagram, className)}>
      <div className={cl(styles.flex, styles.diagram__columns)}>
        <div className={cl(styles.flex, styles.diagram__column)}>
          <p className={styles.diagram__caption}>Баллы</p>
        </div>
        {items.map((item, ind) => {
          return (
            <div
              key={item.caption + ind}
              className={cl(
                styles.flex,
                styles.diagram__column,
                styles['diagram__column--' + item.type],
              )}
            >
              <p className={styles.diagram__caption}>
                {item.type === 'gray' ? '' : item.percent + ' %'}
              </p>
              <div style={{ height: item.percent * px }} />
              <p className={styles.diagram__caption}>{item.caption}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
