import { InputNew } from '@ui/components/InputNew';
import { Button } from '@ui/components/Button';
import { useForm } from 'react-hook-form';
import {
  sendResetPasswordMail,
  validateRequired,
  validations,
} from '@slonum/kit';
import cl from 'classnames';
import styles from './FormAuth.module.scss';
import { notify } from '@ui/blocks/notification';
import { modal } from '@ui/blocks/modal';

interface IForm {
  email: string;
}

export const FormRecoveryPassword = () => {
  const {
    register: registerInput,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IForm>({ mode: 'onBlur' });

  const onSubmit = async (data: IForm) => {
    try {
      await sendResetPasswordMail({ mail: data.email });
      notify.create({
        type: 'mail',
        message: 'На вашу почту была отправлена инструкция',
      });
    } catch (error) {
      notify.create({ type: 'error', message: error });
    }

    modal.close();
  };

  return (
    <form
      className={cl(styles.form, styles.form__password)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputNew
        type="email"
        content="email"
        placeholder="Email, указанный при регистрации"
        {...registerInput('email', {
          ...validateRequired(validations.email),
        })}
        error={errors.email}
      />
      <Button
        type="submit"
        className={cl(styles.form__button, styles.form__button_password)}
        disabled={!isValid}
      >
        Далее
      </Button>
    </form>
  );
};
