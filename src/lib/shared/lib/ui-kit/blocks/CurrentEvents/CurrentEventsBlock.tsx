import { FCL } from '@slonum/kit';
import { CurrentEvents } from './CurrentEvents';
import cl from 'classnames';
import styles from './CurrentEvents.module.scss';
import { H2 } from '@ui/components/titles';

interface ICurrentEventsBlockProps {
  title: 'мероприятия' | 'события';
  isMargin?: boolean;
}

export const CurrentEventsBlock: FCL<ICurrentEventsBlockProps> = ({
  title,
  className,
  isMargin,
}) => {
  return (
    <div
      className={cl(className, styles.container, styles.currentEvents, {
        [styles['currentEvents__margin']]: isMargin,
      })}
    >
      <H2>Актуальные {title}</H2>
      <CurrentEvents className={styles.currentEvents__wrapper} />
    </div>
  );
};
