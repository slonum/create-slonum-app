import { FCL } from '@slonum/kit';
import { SvgEvent } from './assets';
import cl from 'classnames';
import styles from './Event.module.scss';

export const EventInDev: FCL = ({ className }) => {
  return (
    <div className={cl(className, styles.dev)}>
      <SvgEvent className={styles.dev__icon} />
      <p className={styles.dev__text}>
        Новые мероприятия находятся в <br /> процессе разработки
      </p>
    </div>
  );
};
