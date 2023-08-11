import { FCL } from '@slonum/kit';
import { H4 } from '../titles';
import cl from 'classnames';
import styles from './CardContainer.module.scss';

interface ICardContainerProps {
  classTitle?: string;
  title?: string;
}
export const CardContainer: FCL<ICardContainerProps> = ({
  className,
  children,
  title,
  classTitle,
}) => {
  return (
    <div>
      {title && <H4 className={cl(classTitle, styles.card__title)}>{title}</H4>}
      <div className={cl(className, styles.card)}>{children}</div>
    </div>
  );
};
