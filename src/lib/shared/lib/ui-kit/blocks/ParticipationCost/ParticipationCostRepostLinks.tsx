/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import vk from './assets/vk-icon-white.png';
import ok from './assets/ok-icon-white.png';

import styles from './ParticipationCost.module.scss';

interface IParticipationCostRepostLinksProps {
  postLinks: {
    vk?: string;
    ok?: string;
  };
}

export const ParticipationCostRepostLinks: FC<
  IParticipationCostRepostLinksProps
> = ({ postLinks }) => {
  const defaultLinks = {
    vk: postLinks?.vk ?? 'https://vk.com/slonum?w=wall-213270638_157',
    ok: postLinks?.ok ?? 'https://ok.ru/slonum/topic/155964805686668',
  };
  return (
    <div className={styles.participation__repostLinks}>
      <p className={styles.participation__repostText}>Получить скидку:</p>
      <a href={defaultLinks.vk} target="_blank" rel="noreferrer">
        <img
          className={styles.participation__repostIcon}
          src={vk.src}
          alt="vk icon"
        />
      </a>
      <a href={defaultLinks.ok} target="_blank" rel="noreferrer">
        <img
          className={styles.participation__repostIcon}
          src={ok.src}
          alt="ok icon"
        />
      </a>
    </div>
  );
};
