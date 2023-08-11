import React, { useEffect, useMemo, useState } from 'react';
import EventEmitter from 'events';
import { IModal, IModalParams } from './types';
import { Popup } from './Popup';
import * as modals from './variations';

const ev = new EventEmitter();

export const modal: IModal = {
  open: (component, props) => {
    ev.emit('open', { component, props });
  },
  close: () => {
    ev.emit('close');
  },
};

export const ModalConnector = () => {
  const [active, setActive] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  const [props, setProps] = useState<IModalParams>({});

  const openModal = useMemo(() => {
    return ({
      component,
      props,
    }: {
      component: React.ReactNode | keyof typeof modals;
      props: IModalParams;
    }) => {
      let newComponent = component;
      if (typeof component === 'string') {
        const Modal: any = modals[component as keyof typeof modals];
        newComponent = props ? <Modal {...props.componentProps} /> : <Modal />;
      }
      setContent(newComponent);
      setProps(props);
      setActive(true);
    };
  }, [setContent, setProps, setActive]);

  const closeModal = useMemo(
    () => () => {
      setActive(false);
    },
    [setActive],
  );

  useEffect(() => {
    ev.on('open', openModal);
    ev.on('close', closeModal);

    return () => {
      ev.off('open', openModal);
      ev.off('close', closeModal);
    };
  }, [openModal, closeModal]);

  return (
    <Popup
      show={active}
      isNotClose={props?.isNotClose}
      onClose={() => setActive(false)}
      {...props}
    >
      {content}
    </Popup>
  );
};
