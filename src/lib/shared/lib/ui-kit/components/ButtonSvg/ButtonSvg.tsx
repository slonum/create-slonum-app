import { FC } from 'react';
import { SvgTrash, SvgWrite } from '../svg';
import cl from 'classnames';
import styles from './ButtonSvg.module.scss';

interface IButtonSvgProps {
  className?: string;
  onClick: () => void;
  title: string;
  svg: 'trash' | 'write';
}

export const ButtonSvg: FC<IButtonSvgProps> = ({
  onClick,
  className,
  title,
  svg,
}) => {
  return (
    <button
      aria-label={title}
      className={cl(className, styles['button'])}
      onClick={() => onClick()}
    >
      {svg === 'trash' && <SvgTrash />}
      {svg === 'write' && <SvgWrite />}
      <span>{title}</span>
    </button>
  );
};
