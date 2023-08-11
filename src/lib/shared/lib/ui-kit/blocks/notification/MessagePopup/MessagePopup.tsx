import { INotificationType } from '@slonum/kit';
import { modal } from '../../modal';
import { MessagePopupIcon } from './MessagePopupIcon';
import cl from 'classnames';
import styles from './MessagePopup.module.scss';
import { FC } from 'react';
import Link from 'next/link';

export interface IMessagePopupProps {
  type: INotificationType;
  message?: string;
  isDelete?: boolean;
  onClick?: () => void | undefined;
  onChange?: () => void;
}

export const MessagePopup: FC<IMessagePopupProps> = ({
  type,
  message = 'error',
  isDelete,
  onClick,
  onChange,
}) => {
  const PopupMessages = () => {
    if (type === 'registration') {
      return (
        <>
          Cначала необходимо{' '}
          <Link className={styles.messagePopup__link} href={'/register'}>
            Зарегистрироваться
          </Link>
        </>
      );
    }
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{message}</>;
  };
  return (
    <div
      className={styles.messagePopup__wrapper}
      onClick={() => onChange && onChange()}
    >
      <div
        className={cl(styles.messagePopup, {
          [styles['messagePopup--delete']]: isDelete,
        })}
      >
        <div className={styles.messagePopup__content}>
          <MessagePopupIcon type={type === 'registration' ? 'mail' : type} />
          <p className={styles.messagePopup__text}>
            <PopupMessages />
          </p>
          {isDelete && (
            <div className={styles.messagePopup__hover}>
              <p
                className={styles.messagePopup__hoverText}
                onClick={() => onChange && onChange()}
              >
                Нет
              </p>
              <p
                className={cl(
                  styles.messagePopup__hoverText,
                  styles['messagePopup__hoverText-yes'],
                )}
                onClick={() => {
                  onClick && onClick();
                  modal.close();
                }}
              >
                Да
              </p>
            </div>
          )}
        </div>
        <div className={styles.messagePopup__expiration} />
      </div>
    </div>
  );
};
