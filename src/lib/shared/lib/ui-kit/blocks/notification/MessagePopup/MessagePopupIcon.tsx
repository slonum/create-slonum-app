import { INotificationType } from '@slonum/kit';
import React from 'react';
import styles from './MessagePopup.module.scss';

interface IMessagePopupIconProps {
  type: INotificationType;
}

export const MessagePopupIcon: React.FC<IMessagePopupIconProps> = ({
  type,
}) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={require(`./assets/message-popup-${type}.png`).default.src}
      className={styles.messagePopup__tick}
      alt={`${type}-icon`}
    ></img>
  );
};
