import { FC } from 'react';
import { IProgressType } from '@slonum/kit';
import cl from 'classnames';
import styles from './ProgressBar.module.scss';

interface IProgressBarProps {
  percent: number;
  type: IProgressType;
  className?: string;
  title?: string | number;
  subTitle?: string;
}

export const ProgressBarBigCircle: FC<IProgressBarProps> = ({
  percent,
  type,
  className,
  title,
  subTitle,
}) => {
  const valueDashoffset = 578 - Math.floor((578 * percent) / 100);
  return (
    <div className={cl(styles.big, className)}>
      <p
        className={cl(
          styles.flex,
          styles.circle__text,
          styles.big__text,
          styles['color__' + type],
        )}
      >
        {title ? title : percent + ' %'}
        {!!subTitle && <span>{subTitle}</span>}
      </p>
      <svg
        className={styles.big__svg}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={styles.circle__bg}
          cx="100"
          cy="100"
          r="92"
          strokeWidth="16"
        />
        <circle
          cx="100"
          cy="100"
          r="92"
          className={styles.big__progress}
          strokeDashoffset={valueDashoffset}
          strokeWidth="16"
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
