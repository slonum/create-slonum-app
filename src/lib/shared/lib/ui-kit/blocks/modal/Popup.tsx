import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import cl from 'classnames';
import styles from './Popup.module.scss';
import styles_ from './Modal.module.scss';

// import { ElephantWrapper } from '../ElephantWrapper/ElephantWrapper'; //todo добавить

interface IPopupProps {
  show: boolean;
  children: React.ReactNode;
  showForPassword?: boolean; //todo ! пересмотерть реализацию
  isMini?: boolean;
  isSwipe?: boolean;
  isNotScroll?: boolean; //todo пересмотерть реализацию (isNotScroll -> isScroll)
  isEmpty?: boolean; //todo пересмотерть реализацию
  isElephant?: boolean; //todo пересмотерть реализацию
  isMenu?: boolean; //todo пересмотерть реализацию
  isNotClose?: boolean; //todo пересмотерть реализацию
  isNullModal?: boolean;
  style?: {
    mobileBottom?: boolean;
    mobileSwipe?: boolean;
  };
  onClose: () => void;
  onCloseHandl?: () => void; //todo пересмотерть реализацию
}

export const Popup: React.FC<IPopupProps> = ({
  show,
  onClose,
  children,
  showForPassword,
  isMini,
  isSwipe,
  isNotScroll,
  onCloseHandl,
  isEmpty,
  isElephant,
  isMenu,
  isNotClose,
  isNullModal,
  style,
}) => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const closePopap = () => {
    if (isNotClose) return;

    onClose();
    onCloseHandl && onCloseHandl();
  };
  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if (isNotClose) return;

    if ((e.charCode || e.keyCode) === 27) {
      closePopap();
    }
  };

  useEffect(() => {
    if (show && !showForPassword) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function () {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mouseHandler = function (event: any) {
    const startY = event.targetTouches[0].pageY;
    let shiftY: number;

    document.addEventListener('touchmove', onMouseMove);
    document.addEventListener('touchend', onMouseUp);

    function onMouseMove(event: any) {
      const Y = event.targetTouches[0].pageY;
      shiftY = Y - startY;
      if (!containerRef.current || shiftY < 0) return;
      containerRef.current.style.transform = `translate(0, ${shiftY}px)`;
    }

    function onMouseUp() {
      if (!containerRef.current) return;
      const { clientHeight } = containerRef.current;
      const prc = (shiftY * 100) / clientHeight;
      if (prc > 30) {
        containerRef.current.style.transform = `translate(0, ${clientHeight}px)`;
        setTimeout(() => {
          closePopap();
        }, 100);
      } else {
        containerRef.current.style.transform = 'translate(0, 0)';
      }
      document.removeEventListener('touchmove', onMouseMove);
      document.removeEventListener('touchend', onMouseUp);
    }
  };

  const [element, setElement] = useState<HTMLElement>();

  useEffect(() => {
    if (!show) {
      document.body.style.overflow = '';
      setElement(undefined);
    } else {
      document.body.style.overflow = 'hidden';
      const elem = document.getElementById('modal');
      if (elem) setElement(elem);
    }
  }, [show]);

  const ModalElement = () => {
    return (
      <div className={cl(styles_.modal)}>
        <div
          className={cl(styles_.modal__container, {
            [styles_['modal__container--mob-bottom']]: style?.mobileBottom,
            [styles_['modal__container--mob-swipe']]: style?.mobileSwipe,
          })}
          ref={containerRef}
        >
          {style?.mobileSwipe && (
            <div className={styles_.swipe} onTouchStart={mouseHandler} />
          )}
          {children}
        </div>
        <div className={styles_.modal__overlay} onClick={closePopap} />
      </div>
    );
  };

  if (isNullModal && element) {
    return ReactDOM.createPortal(<ModalElement />, element);
  }

  if (element) {
    return ReactDOM.createPortal(
      <div
        className={cl(styles.popup, {
          [styles.swipe]: isSwipe,
          [styles['popup--menu']]: isMenu,
        })}
      >
        <div
          className={cl(styles.popup__container, {
            [styles['popup__container--mini']]: isMini,
            [styles.swipe__container]: isSwipe,
            [styles.empty__container]: isEmpty,
            [styles['popup__container--elephant']]: isElephant,
            [styles['popup__container--menu']]: isMenu,
          })}
          ref={containerRef}
        >
          {!isNotClose && (
            <div
              className={cl(styles.popup__close, {
                [styles['popup__close--mini']]: isMini,
                [styles['popup__close--menu']]: isMenu,
                [styles.swipe__close]: isSwipe,
              })}
              onClick={closePopap}
            />
          )}
          <div
            className={cl(styles.none, {
              [styles.swipe__swiper]: isSwipe,
            })}
            onTouchStart={mouseHandler}
          />
          {/* {isElephant && <ElephantWrapper isPopup isInvisible={!isElephant} />} */}
          <div
            className={cl(styles.popup__content, {
              [styles['popup__content--mini']]: isMini,
              [styles.swipe__content]: isSwipe,
              [styles.notscroll]: isNotScroll,
              [styles.empty__content]: isEmpty,
              [styles['popup__content--elephant']]: isElephant,
              [styles['popup__content--menu']]: isMenu,
            })}
          >
            {children}
          </div>
        </div>
        <div
          className={cl(
            styles.popup__overlay,
            isNotClose && styles.popup__overlay_disable,
          )}
          onClick={closePopap}
          onTouchStart={mouseHandler}
        />
      </div>,
      element,
    );
  }
  return null;
};
