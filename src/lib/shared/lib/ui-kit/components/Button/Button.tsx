import { FCL } from '@slonum/kit';
import cl from 'classnames';
import styles from './Button.module.scss';

export type IBtnVariant =
  | 'main'
  | 'main-light'
  | 'aditional'
  | 'light'
  | 'download'
  | 'save'
  | 'practice'
  | 'practice-bold'
  | 'notlight'
  | 'trainer'
  | 'black'
  | 'link'
  | 'main-card';

export interface IButtonProps {
  variant?:
    | 'main'
    | 'main-light'
    | 'aditional'
    | 'light'
    | 'download'
    | 'save'
    | 'practice'
    | 'practice-bold'
    | 'notlight'
    | 'trainer'
    | 'black'
    | 'link'
    | 'main-card';
  onClick?: (e?: React.MouseEvent) => void;
  children: React.ReactNode;
  type?: 'button' | 'reset' | 'submit';
  disabled?: false | true;
  opacityOff?: boolean;
  reference?: any;
}

export const Button: FCL<IButtonProps> = ({
  onClick,
  variant = 'main',
  type = 'button',
  disabled = false,
  opacityOff,
  reference,
  className,
  children,
}) => {
  return (
    <button
      aria-label={type}
      className={cl(styles.button, className, styles[`button__${variant}`], {
        [styles[`button__${variant}--opacity-off`]]: opacityOff && disabled,
      })}
      type={type}
      onClick={onClick}
      disabled={disabled}
      ref={reference}
    >
      {children}
    </button>
  );
};
