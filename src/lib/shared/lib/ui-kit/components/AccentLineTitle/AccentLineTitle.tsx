import cl from 'classnames';
import styles from './AccentLineTitle.module.scss';

export interface IAccentLineTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const AccentLineTitle: React.FC<IAccentLineTitleProps> = ({
  children,
  className,
}) => {
  return <span className={cl(className, styles.line)}>{children}</span>;
};
