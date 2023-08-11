import { FC } from 'react';
import { Button, IBtnVariant } from '@ui/components/Button';
import { SvgElephantHead } from '@ui/components/svg';
import { H2 } from '@ui/components/titles';
import cl from 'classnames';
import styles from './PopupElephant.module.scss';

interface IElButton {
  title: string;
  variant?: IBtnVariant;
  onClick: () => void;
}

interface IPopupElephantProps {
  btn?: {
    rightBtn: IElButton;
    leftBtn: IElButton;
  };
  className?: string;
  title?: string;
  text?: string;
  children?: React.ReactElement;
}

export const PopupElephant: React.FC<IPopupElephantProps> = (props) => {
  return (
    <div className={cl(styles.popup, props.className)}>
      <PopupContent {...props} />
      <SvgElephantHead className={styles.popup__image} />
    </div>
  );
};

export const PopupContent: FC<IPopupElephantProps> = ({
  btn,
  title,
  className,
  text,
  children,
}) => {
  return (
    <div className={cl(className, styles.popup__content)}>
      {title && <H2 className={styles.popup__title}>{title}</H2>}
      {text && <p className={styles.popup__text}>{text}</p>}
      {btn && (
        <div className={styles.popup__buttons}>
          <Button
            variant={btn.leftBtn.variant ?? 'notlight'}
            className={styles.popup__yes}
            onClick={() => btn.leftBtn.onClick()}
          >
            {btn.leftBtn.title}
          </Button>
          <Button
            variant={btn.leftBtn.variant ?? 'main'}
            className={styles.popup__yes}
            onClick={() => btn.rightBtn.onClick()}
          >
            {btn.rightBtn.title}
          </Button>
        </div>
      )}
      {children}
    </div>
  );
};

export default PopupElephant;
