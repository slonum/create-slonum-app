import React, { useEffect } from 'react';
import Image from 'next/image';

import cl from 'classnames';
import styles from './PrincipleOfOperationCard.module.scss';
import { H3 } from '@ui/components/titles';

interface IPrincipleOfOperationCardProps {
  icon: JSX.Element | string;
  title: string;
  text1: string;
  text2?: string;
  id: number;
}

export const PrincipleOfOperationCard: React.FC<
  IPrincipleOfOperationCardProps
> = ({ icon, title, text1, text2, id }) => {
  const onCardAppearInView = (cards: IntersectionObserverEntry[]) => {
    cards.forEach((card: IntersectionObserverEntry) => {
      if (card.isIntersecting) {
        card.target.classList.add(styles.principleOfOperationCard__animation);
      }
    });
  };

  const createAnimationOnAppear = () => {
    const cardsObserver = new IntersectionObserver(onCardAppearInView, {
      threshold: [1],
    });
    const cards = document.querySelectorAll('[class*=cardOfPrinciple]');
    cards.forEach((card) => cardsObserver.observe(card));
  };

  useEffect(() => {
    createAnimationOnAppear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li
      className={cl(
        styles.principleOfOperationCard,
        styles.principleOfOperationCard__cardOfPrinciple,
        styles[`principleOfOperationCard__cardOfPrinciple-card${id}`],
      )}
    >
      <div className={styles.principleOfOperationCard__icon}>
        {typeof icon === 'string' ? (
          <Image
            src={require(`./assets/principles-${icon}.webp`)}
            alt={'Card'}
          />
        ) : (
          icon
        )}
      </div>
      <H3
        className={styles.principleOfOperationCard__title}
      >{`${id}. ${title}`}</H3>
      <p className={styles.principleOfOperationCard__text}>{text1}</p>
      {text2 && (
        <p className={styles.principleOfOperationCard__text}>{text2}</p>
      )}
    </li>
  );
};
