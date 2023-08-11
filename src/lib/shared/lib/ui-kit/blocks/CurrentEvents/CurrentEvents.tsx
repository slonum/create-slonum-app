import { useEffect, useState } from 'react';
import { FCL, fetchGetCompetition } from '@slonum/kit';

import { EventInDev } from './Event/EventInDev';
import { Event } from './Event/Event';
import styles from './CurrentEvents.module.scss';
import cl from 'classnames';

export const CurrentEvents: FCL = ({ className }) => {
  const [events, setEvents] = useState<{ endingTime: string; title: string }>();
  useEffect(() => {
    fetchGetCompetition()
      .then(({ data }) => {
        setEvents({ endingTime: data.endingTime, title: data.title });
      })
      .catch((error) => {});
  }, []);

  return (
    <div className={cl(className, styles.events)}>
      {events && <Event className={styles.events__card} {...events} />}
      <EventInDev className={styles.events__card} />
    </div>
  );
};
