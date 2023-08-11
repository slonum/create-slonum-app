import { FCL } from '@slonum/kit';
import { SubscriptionBackground } from './SubscriptionBackground';
import { SubscriptionForm } from './SubscriptionForm';
import { H2 } from '@ui/components/Typography/H';
import styles from './Subscription.module.scss';

export const SubscriptionIndex: FCL = ({ className }) => {
  return (
    <SubscriptionBackground className={className}>
      <div className={styles.subscription__container}>
        <H2 className={styles.subscription__title}>
          Подпишитесь на нашу рассылку
        </H2>
        <p className={styles.subscription__paragraph}>
          Будем стараться присылать только самое интересное и ценное <b>:)</b>
        </p>
        <SubscriptionForm />
      </div>
    </SubscriptionBackground>
  );
};
