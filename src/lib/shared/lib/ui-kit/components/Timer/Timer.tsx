/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { TimerItem } from './TimerItem';
import styles from './Timer.module.scss';

interface ITimerProps {
  endingTime: string;
}
type dateType = 'days' | 'hours' | 'minutes';

export const Timer: React.FC<ITimerProps> = ({ endingTime }) => {
  const [time, setTime] = useState({ days: '0', hours: '0', minutes: '0' });
  const delay = 60000;
  const fillZeros = (timeValue: number) => {
    return timeValue.toString().length > 1
      ? timeValue.toString()
      : '0' + timeValue.toString();
  };
  const declensionNum = (num: string, words: string[]) => {
    const parsedNum = parseInt(num);
    return words[
      parsedNum % 100 > 4 && parsedNum % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][parsedNum % 10 < 5 ? parsedNum % 10 : 5]
    ];
  };
  const determineTimeText = (type: dateType) => {
    switch (type) {
      case 'days':
        return declensionNum(time.days, ['день', 'дня', 'дней']);
      case 'hours':
        return declensionNum(time.hours, ['час', 'часа', 'часов']);
      case 'minutes':
        return declensionNum(time.minutes, ['минуту', 'минуты', 'минут']);
    }
  };
  const updateTimer = () => {
    const diff = Date.parse(endingTime) - Date.now();
    const days = fillZeros(
      diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0,
    );
    const hours = fillZeros(
      diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0,
    );
    const minutes = fillZeros(diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0);
    setTime({ days, hours, minutes });
  };

  useEffect(() => {
    updateTimer();
    const interval = setInterval(() => {
      updateTimer();
    }, delay);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endingTime]);

  const dots = <div className={styles.timer__dots}>:</div>;

  return (
    <div className={styles.timer}>
      <div className={styles.timer__caption}>Приём работ закончится через:</div>
      <div className={styles.timer__content}>
        <TimerItem caption={determineTimeText('days')} value={time.days} />
        {dots}
        <TimerItem caption={determineTimeText('hours')} value={time.hours} />
        {dots}
        <TimerItem
          caption={determineTimeText('minutes')}
          value={time.minutes}
        />
      </div>
    </div>
  );
};
