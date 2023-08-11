import { FC } from 'react';
import { ChevronRight } from '../svg';
import cl from 'classnames';
import styles from './Onboard.module.scss';

interface IOnboardProps {
  className?: string;
  children: React.ReactNode;
  direction?: 'flex-start' | 'center' | 'flex-end';
  isReverse?: boolean;
  next: () => void;
  end?: () => void;
  id: string;
  isEnd?: boolean;
  isHiddenLeft?: boolean;
}

export const Onboard: FC<IOnboardProps> = ({
  children,
  className,
  direction = 'center',
  end,
  id,
  next,
  isReverse,
  isEnd,
  isHiddenLeft,
}) => {
  const endHandler = () => {
    end && end();
  };
  const nextHandler = () => {
    next();
  };

  const flexDirection = isReverse ? 'column' : 'column-reverse';
  return (
    <div
      className={cl(styles.flex, className, styles.onboard)}
      style={{ flexDirection, alignItems: direction }}
      id={id}
    >
      <div className={styles.onboard__container}>
        <div className={styles.onboard__content}>{children}</div>
        <div className={cl(styles.flex, styles.onboard__bottom)}>
          {isHiddenLeft && <div></div>}
          {!isHiddenLeft && (
            <button className={styles.onboard__end} onClick={endHandler}>
              {isEnd ? 'ещё раз' : 'завершить'}
            </button>
          )}
          <button
            className={cl(styles.onboard__next, styles.flex)}
            onClick={nextHandler}
          >
            {isEnd ? 'завершить' : 'далее'}
            <ChevronRight />
          </button>
        </div>
      </div>
      <div
        className={cl(styles['onboard__icon'], {
          [styles['onboard__icon--rev']]: isReverse,
        })}
      >
        <svg
          width="45"
          height="23"
          viewBox="0 0 45 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.2375 0.631411C21.8767 5.3973 20.0817 9.7603 16.9593 13.4605C16.2575 14.2923 14.8017 15.722 13.9249 16.4408C10.1783 19.512 5.32558 21.477 0.286723 22C-0.732888 22.1058 -0.201792 22.0003 22.2892 22C41.969 21.9997 44.9959 22.0686 44.2875 22C37.6225 21.3543 31.6277 18.2484 27.5236 13.3712C24.4665 9.73808 22.6637 5.31574 22.3302 0.631411L22.2853 0L22.2375 0.631411Z"
            fill="#14A76C"
          />
        </svg>
      </div>
    </div>
  );
};
