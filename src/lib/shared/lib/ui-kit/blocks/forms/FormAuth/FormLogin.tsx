import { FC, FormEvent } from 'react';
import { InputNew } from '@ui/components/InputNew';
import { Button } from '@ui/components/Button';
import { useAuthActions } from '@ui/hooks/redux-hooks';
import { useForm } from 'react-hook-form';
import { H4 } from '@ui/components/titles';
import { validateRequired, validations } from '@slonum/kit';
import styles from './FormAuth.module.scss';

interface IFormLoginProps {
  onClickForgotPassword: () => void;
}

interface IForm {
  email: string;
  password: string;
}

export const FormLogin: FC<IFormLoginProps> = ({ onClickForgotPassword }) => {
  const { login } = useAuthActions();

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<IForm>({
    mode: 'onBlur',
  });

  console.log(isValid);

  const onSubmit = async (data: IForm) => {
    await login({
      login: data.email,
      password: data.password,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__inputs}>
        <InputNew
          type="text"
          content="email"
          placeholder="Ваш E-mail или логин"
          {...register('email', {
            ...validateRequired(validations.loginOrEmail),
          })}
          error={errors.email}
        />
        <InputNew
          type="password"
          content="password"
          placeholder="Пароль"
          {...register('password', {
            ...validateRequired(validations.password),
          })}
          error={errors.password}
        />
      </div>
      <div
        className={styles.form__forgotPassword}
        onClick={onClickForgotPassword}
      >
        <H4>Забыли пароль?</H4>
      </div>

      <Button type="submit" className={styles.form__button} disabled={!isValid}>
        Войти
      </Button>
    </form>
  );
};
