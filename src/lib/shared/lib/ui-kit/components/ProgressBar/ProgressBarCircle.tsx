import { FC } from 'react';
import { IProgressType } from '@slonum/kit';
import cl from 'classnames';
import styles from './ProgressBar.module.scss';

interface IProgressBarProps {
  percent: number;
  type: IProgressType;
  className?: string;
  stroke?: number;
}

export const ProgressBarCircle: FC<IProgressBarProps> = ({
  percent,
  type,
  className,
}) => {
  const valueDashoffset = 257.48 - Math.floor((257.48 * percent) / 100);
  return (
    <div className={cl(styles.circle, className)}>
      <p
        className={cl(
          styles.flex,
          styles.circle__text,
          styles['color__' + type],
        )}
      >
        {percent}%
      </p>
      <svg
        className={styles.circle__svg}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={styles.circle__bg}
          cx="50"
          cy="50"
          r="41"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r="41"
          className={styles.circle__progress}
          strokeDashoffset={valueDashoffset}
          strokeWidth="8"
          stroke={`url(#${type})`}
        />
        <defs>
          <linearGradient id="light-green" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="-0.741" stopColor="#6BD0EA" />
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
