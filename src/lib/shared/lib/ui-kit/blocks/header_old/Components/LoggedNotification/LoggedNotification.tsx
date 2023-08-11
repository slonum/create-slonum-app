import { FC, useRef, useState } from 'react';
import Link from 'next/link';

import { notify } from '@ui/blocks/notification';
import { confirmEmail, useCloseToggle } from '@slonum/kit';
import { SvgNotification } from '@ui/components/svg';
import cl from 'classnames';
import styles from './LoggedNotification.module.scss';

interface ILoggedNotificationProps {
  notification: {
    id: string;
    link?: string;
    email?: string;
    message: string;
  }[];
}

export const LoggedNotification: FC<ILoggedNotificationProps> = ({
  notification,
}) => {
  const [toggleButton, setToggleButton] = useState(false);
  const ref = useRef<any>();

  useCloseToggle(setToggleButton, toggleButton, ref);

  const notificationButtonHandler = () => {
    if (!notification.length) return;
    setToggleButton(!toggleButton);
  };

  const NotificationItem = ({ link, message, email }: any) => {
    return link ? (
      <Link href={link} className={styles.notification__item}>
        {message}
      </Link>
    ) : (
      <div
        className={styles.notification__item}
        onClick={() => {
          if (email) confirmEmail({ emailConfirmHash: email });
          notify.create({
            type: 'success',
            message: 'Письмо отправлено на почту',
          });
        }}
      >
        {message}
      </div>
    );
  };

  return (
    <div
      ref={ref}
      className={cl(styles.notification, {
        [styles['notification--active']]: notification.length,
        [styles['notification--open']]: toggleButton,
      })}
      onClick={notificationButtonHandler}
    >
      <div className={styles.notification__icon}>
        <SvgNotification />
      </div>
      <div
        className={cl(styles.notification__menu, {
          [styles['notification__menu--active']]: toggleButton,
        })}
      >
        {notification.map((not) => (
          <NotificationItem key={not.id} {...not} />
        ))}
      </div>
    </div>
  );
};
