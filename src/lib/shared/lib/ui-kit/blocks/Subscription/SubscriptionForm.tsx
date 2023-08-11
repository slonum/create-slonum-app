import { FC, FormEvent } from 'react';
import {
  requestEmailSubscribe,
  validateRequired,
  validations,
} from '@slonum/kit';
import { CheckboxBlock } from '@ui/blocks/Checkbox';
import { Button } from '@ui/components/Button';
import { InputNew } from '@ui/components/InputNew';

import cl from 'classnames';
import styles from './Subscription.module.scss';
import { notify } from '../notification';
import { useForm } from 'react-hook-form';

interface ISubscriptionFormProps {
  isHeader?: boolean;
  id?: string;
}

interface IForm {
  email: string;
}

export const SubscriptionForm: FC<ISubscriptionFormProps> = ({
  id,
  isHeader,
}) => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const onClickSend = async (data: IForm) => {
    if (!isValid) {
      notify.create({
        message: 'Некорректный email',
        type: 'error',
      });
      return;
    }

    await requestEmailSubscribe(data.email, true, notify);
  };

  return (
    <form
      id={'subscribeForm' + (id ? id : '')}
      className={cl(
        styles.subscription__form,
        isHeader && styles['subscription__form--isHeader'],
      )}
      onSubmit={handleSubmit(onClickSend)}
    >
      <div className={styles.subscription__form__controls}>
        <InputNew
          type="email"
          content="email"
          placeholder={isHeader ? 'Напомнить на E-mail' : 'E-mail'}
          className={
            isHeader
              ? styles['subscription__input--isHeader']
              : styles.subscription__input
          }
          {...register('email', { ...validateRequired(validations.email) })}
        />
        <Button
          type="submit"
          className={isHeader ? styles.subscription__button : ''}
        >
          Отправить
        </Button>
      </div>
      <CheckboxBlock
        className={styles.subscription__checkbox}
        isSubBlock
        color={isHeader ? 'gray' : 'white'}
        isBlank
        isHeader={isHeader}
      />
    </form>
  );
};
