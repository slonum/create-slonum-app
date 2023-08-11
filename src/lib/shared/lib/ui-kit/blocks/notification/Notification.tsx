import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { INotificationProps } from '@slonum/kit';
import { MessagePopup } from './MessagePopup/MessagePopup';
const timeToDelete = 300;

export const Notification: React.FC<INotificationProps> = ({
  type = 'error',
  onDelete,
  autoClose = true,
  message,
  onClick,
  isDelete = false,
}) => {
  const element = document.getElementById('notification');
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isDelete) return;
    const handle = () => {
      setIsClosing(true);
    };
    setTimeout(() => {
      document.addEventListener('click', handle);
    }, 0);
    return () => {
      document.removeEventListener('click', handle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isClosing) {
      const timeoutId = setTimeout(onDelete, timeToDelete);

      return () => {
        clearTimeout(timeoutId);
      };
    } else return;
  }, [isClosing, onDelete]);

  useEffect(() => {
    if (autoClose) {
      const timeoutId = setTimeout(() => setIsClosing(true), 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    } else return;
  }, [autoClose]);

  const onChange = () => {
    onDelete();
    setIsClosing(true);
  };

  if (element)
    return ReactDOM.createPortal(
      <MessagePopup
        type={type}
        message={message}
        isDelete={isDelete}
        onChange={onChange}
        onClick={onClick}
      />,
      element,
    );
  return null;
};
