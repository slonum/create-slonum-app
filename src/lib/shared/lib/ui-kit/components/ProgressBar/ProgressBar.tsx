import { FC } from 'react';
import { IProgressType } from '@slonum/kit';
import cl from 'classnames';
import styles from './ProgressBar.module.scss';

interface IProgressBarProps {
  percent: number;
  type: IProgressType;
  isMini?: boolean;
  className?: string;
}

export const ProgressBar: FC<IProgressBarProps> = ({
  percent,
  type,
  className,
  isMini,
}) => {
  const valueDashoffset = 314 - Math.floor((314 * percent) / 100);
  return (
    <div className={cl(styles.bar, className)}>
      <div
        className={cl(styles.bar__text, styles['color__' + type], {
          [styles['bar__text--mini']]: isMini,
        })}
      >
        <p>{percent}%</p>
      </div>
      <svg
        className={styles.bar__svg}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className={styles.bar__bg} cx="60" cy="60" r="50" />
        <circle
          cx="60"
          cy="60"
          r="50"
          className={styles.bar__progress}
          strokeDashoffset={valueDashoffset}
          stroke={`url(#${type})`}
        />
        <defs>
          <linearGradient id="light-green" x1="0" y1="0" x2="0" y2="100%">
            <stop stopColor="#6BD0EA" />
            <stop offset="0.5" stopColor="#6BE58C" />
            <stop offset="1" stopColor="#BDE351" />
          </linearGradient>

          <linearGradient id="light-blue" x1="100%" y1="100%" x2="0" y2="0">
            <stop stopColor="#2FE6FF" />
            <stop offset="0.5" stopColor="#2DC6F7" />
            <stop offset="1" stopColor="#555BFA" />
          </linearGradient>

          <linearGradient id="violet" x1="0" y1="100%" x2="100%" y2="0">
            <stop stopColor="#FD66B5" />
            <stop offset="0.5" stopColor="#AA65D8" />
            <stop offset="1" stopColor="#6D6DE2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
