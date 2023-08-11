import React, { Dispatch, SetStateAction } from 'react';
import { ParticipationCostRepostLinks } from './ParticipationCostRepostLinks';
import { ParticipationPrice } from './ParticipationPrice';
import cl from 'classnames';
import styles from './ParticipationCost.module.scss';

interface IParticipationCostProps {
  type: 'index' | 'repost' | 'no-repost';
  radioInput?: boolean;
  price: number;
  priceWithRepost: number;
  postLinks: any;
  setRadioInput?: Dispatch<
    SetStateAction<{ repost: boolean; noRepost: boolean }>
  >;
}

export const ParticipationCost: React.FC<IParticipationCostProps> = ({
  type,
  radioInput,
  price,
  priceWithRepost,
  postLinks,
  setRadioInput,
}) => {
  if (type === 'index') {
    return (
      <div className={styles.participation}>
        <div className={styles.participation__wrapper}>
          <h4 className={styles.participation__title}>Стоимость участия:</h4>
          <div className={styles.participation__content}>
            <ParticipationPrice
              text="Нужен репост в соцсетях"
              price={priceWithRepost}
            />
            <p className={styles.participation__or}>или</p>
            <ParticipationPrice text="Без репоста" price={price} />
          </div>
          <ParticipationCostRepostLinks postLinks={postLinks} />
        </div>
      </div>
    );
  }

  if (type === 'repost') {
    return (
      <div
        className={cl(styles.participation, styles['participation--repost'])}
      >
        <div
          className={cl(
            styles.participation__wrapper,
            styles['participation__wrapper--repost'],
          )}
          onClick={() => {
            if (setRadioInput)
              setRadioInput({
                repost: true,
                noRepost: false,
              });
          }}
        >
          <div className={styles.participation__top}>
            <input
              checked={radioInput}
              className={cl(
                styles.participation__radio,
                styles['participation__radio--repost'],
              )}
              type="radio"
              name="isRepost"
              value="repost"
              onChange={(e) => {
                if (setRadioInput)
                  setRadioInput({
                    repost: e.currentTarget.checked,
                    noRepost: !e.currentTarget.checked,
                  });
              }}
            />
            <svg
              className={cl(
                styles.participation__radioTick,
                styles['participation__radioTick--repost'],
              )}
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4L4.33333 7L11 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4
              className={cl(
                styles.participation__title,
                styles['participation__title--repost'],
              )}
            >
              Стоимость участия:
            </h4>
          </div>
          <div
            className={cl(
              styles.participation__content,
              styles['participation__content--repost'],
            )}
          >
            <ParticipationPrice
              text="Нужен репост в соцсетях"
              price={priceWithRepost}
            />
          </div>
          <ParticipationCostRepostLinks postLinks={postLinks} />
        </div>
      </div>
    );
  }

  if (type === 'no-repost') {
    return (
      <div
        className={cl(styles.participation, styles['participation--repost'])}
      >
        <div
          className={cl(
            styles.participation__wrapper,
            styles.participation__wrapper_noRepost,
            styles['participation__wrapper--repost'],
          )}
          onClick={() => {
            if (setRadioInput)
              setRadioInput({
                repost: false,
                noRepost: true,
              });
          }}
        >
          <div className={styles.participation__top}>
            <input
              checked={radioInput}
              className={cl(
                styles.participation__radio,
                styles['participation__radio--repost'],
              )}
              type="radio"
              name="isRepost"
              value="noRepost"
              onChange={(e) => {
                if (setRadioInput)
                  setRadioInput({
                    repost: !e.currentTarget.checked,
                    noRepost: e.currentTarget.checked,
                  });
              }}
            />
            <svg
              className={cl(
                styles.participation__radioTick,
                styles['participation__radioTick--repost'],
              )}
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4L4.33333 7L11 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4
              className={cl(
                styles.participation__title,
                styles['participation__title--repost'],
              )}
            >
              Стоимость участия:
            </h4>
          </div>
          <div
            className={cl(
              styles.participation__content,
              styles['participation__content--repost'],
            )}
          >
            <ParticipationPrice text="Без репоста" price={price} />
          </div>
        </div>
      </div>
    );
  }

  return null;
};
