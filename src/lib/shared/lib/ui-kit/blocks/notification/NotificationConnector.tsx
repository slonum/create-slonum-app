import React, { useEffect, useMemo } from 'react';
import EventEmitter from 'events';
import {
  FCC,
  ICreateToastProps,
  INotificationConnector,
  INotify,
} from '@slonum/kit';
import { Notification } from './Notification';

const event = new EventEmitter();

export const notify: INotify = {
  create: (props) => {
    event.emit('create', { props });
  },
};

export const NotificationConnector: FCC = () => {
  const [notification, setNotification] = React.useState<any[]>([]);

  const createToast = useMemo(() => {
    return (props: ICreateToastProps) => {
      setNotification([...notification, { ...props, id: notification.length }]);
    };
  }, [notification]);

  const deleteToast = (id: number) =>
    setNotification(
      notification.filter(
        (notification: INotificationConnector, index: number) =>
          notification.id !== id,
      ),
    );

  useEffect(() => {
    event.on('create', createToast);

    return () => {
      event.off('create', createToast);
    };
  }, [createToast]);

  return (
    <>
      {notification.map((not, ind) => (
        <Notification
          key={not.id + '-' + ind}
          type={not.props.type}
          message={not.props.message}
          onDelete={() => deleteToast(not.id)}
          autoClose={not.props.autoClose}
          onClick={not.props.onClick}
          isDelete={not.props.isDelete}
        />
      ))}
    </>
  );
};
