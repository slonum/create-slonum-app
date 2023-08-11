import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FCL, BASE_URL, isServer, DRAWING_COMPETITION } from '@slonum/kit';
import { SvgAge, SvgLogo } from './assets';
import competitionImage from './assets/competition.webp';
import phrase1 from './assets/event-phrase-1.webp';
import phrase2 from './assets/event-phrase-1.webp';
import styles from './Event.module.scss';
import cl from 'classnames';
import Link from 'next/link';

const DynamicImage = dynamic(
  () => import('@ui/components/svg').then((mod) => mod.SvgElephant),
  {
    ssr: false,
    loading: () => (
      <svg
        viewBox="0 0 291 326"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.event__elephant}
      ></svg>
    ),
  },
);

export interface IEvent {
  endingTime: string;
  title: string;
}

export const Event: FCL<IEvent> = ({ endingTime, title, className }) => {
  const date = new Date(endingTime).toLocaleDateString('ru', {
    month: 'long',
    day: 'numeric',
  });
  const vocabDate =
    date +
    ' ' +
    new Date(endingTime).toLocaleTimeString('ru', {
      hour: '2-digit',
      minute: '2-digit',
    });
  return (
    <Link href={DRAWING_COMPETITION} className={cl(className, styles.event)}>
      <Image
        src={competitionImage}
        alt="competition cover"
        fill
        priority={true}
      />
      <div className={styles.event__leftCol}>
        <p className={styles.event__category}>конкурс детского рисунка</p>
        <p className={styles.event__title}>«{title}»</p>
        <div className={styles.event__phrases}>
          <div className={cl(styles.event__phrase, styles['event__phrase--1'])}>
            <Image width={14} height={10} src={phrase1} alt="" />
            <p className={styles.event__phraseText}>Рисуйте за свой город!</p>
          </div>
          <div className={cl(styles.event__phrase, styles['event__phrase--2'])}>
            <Image width={14} height={10} src={phrase2} alt="" />
            <p className={styles.event__phraseText}>Персональный диплом</p>
          </div>
        </div>
        {endingTime && (
          <span className={styles.event__annotation}>
            Прием рисунков <b>до {vocabDate}</b>
          </span>
        )}
      </div>
      <div className={styles.event__rightCol}>
        <div className={styles.event__logo}>
          <SvgLogo />
        </div>
        <DynamicImage className={styles.event__elephant} />
        <div className={styles.event__age}>
          <SvgAge />
        </div>
      </div>
    </Link>
  );
};
