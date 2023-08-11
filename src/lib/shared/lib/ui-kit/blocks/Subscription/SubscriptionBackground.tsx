import { FCL } from '@slonum/kit';
import cl from 'classnames';
import styles from './Subscription.module.scss';

export const SubscriptionBackground: FCL = ({ children, className }) => {
  return <div className={cl(className, styles.subscription)}>{children}</div>;
};
