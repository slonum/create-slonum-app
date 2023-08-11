import { FCL } from '@slonum/kit';
import cl from 'classnames';
import styles from './Button.module.scss';

interface IButtonProps {
  background?: 'white' | 'green' | 'red' | 'blue';
  color?: 'dark' | 'dark-gray' | 'white' | 'green' | 'orange' | 'blue' | 'red';
  disabled?: boolean;
  disabledText?: string;
  btnType?: 'button' | 'submit' | 'reset';
  reference?: React.MutableRefObject<HTMLButtonElement>;
  isLoading?: boolean;
  noDisableEffect?: boolean;
  size?: 'normal' | 'mini';
  onClick?: (e: any) => void;
}

export const Button: FCL<IButtonProps> = ({
  background = 'green',
  color = 'white',
  children,
  className,
  disabled,
  btnType = 'button',
  disabledText,
  reference,
  isLoading,
  noDisableEffect,
  size = 'normal',
  onClick,
}) => {
  return (
    <button
      type={btnType}
      className={cl(
        className,
        styles['button'],
        styles[`button--${size}`],
        styles[`background--${background}`],
        styles[`color--${color}`],
        {
          [styles['tooltip']]: !!disabledText,
          [styles['nodisable']]: noDisableEffect,
        },
      )}
      onClick={(e) => {
        if (isLoading) return;
        onClick && onClick(e);
      }}
      disabled={disabled}
      data-title={disabledText}
      ref={reference}
    >
      {isLoading ? <div className={styles.spinner} /> : children}
    </button>
  );
};
