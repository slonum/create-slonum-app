import { H1 } from '@ui/components/titles';
import { SubscriptionBackground } from './SubscriptionBackground';

export const SubscriptionContacts = () => {
  return (
    <SubscriptionBackground>
      <H1 isWhite>
        Контакт для обратной связи: <br />
        <a href="mailto:info@slonum.ru">info@slonum.ru</a>
      </H1>
    </SubscriptionBackground>
  );
};
