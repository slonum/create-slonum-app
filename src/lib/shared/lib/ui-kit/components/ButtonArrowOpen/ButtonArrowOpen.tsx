import { FC } from 'react';
import { SvgArrowDown } from '../svg/svgArrowDown';
import { useCloseToggle } from '@slonum/kit';
import cl from 'classnames';
import styles from './ButtonArrowOpen.module.scss';

interface IButtonArrowOpenProps {
  className?: string;
  toggleButton: boolean;
  setToggleButton: (v: boolean) => void;
  reference: React.MutableRefObject<any>;
  isMini?: boolean;
}

export const ButtonArrowOpen: FC<IButtonArrowOpenProps> = ({
  isMini,
  className,
  setToggleButton,
  toggleButton,
  reference,
}) => {
  useCloseToggle(setToggleButton, toggleButton, reference);

  const openHandler = () => {
    setToggleButton(!toggleButton);
  };
  return (
    <button
      aria-label="Открыть"
      className={cl(className, styles['button-toggle'], {
        [styles['button-toggle--mini']]: isMini,
        [styles['button-toggle--active']]: toggleButton,
      })}
      onClick={openHandler}
    >
      <SvgArrowDown className={styles['button-toggle__icon']} />
    </button>
  );
};
