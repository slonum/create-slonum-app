import { Button } from '@ui/components/Button';
import { InputNew } from '@ui/components/InputNew';
import { useForm } from 'react-hook-form';
import { useAuthActions } from '@ui/hooks/redux-hooks';
import { validateRequired, validations } from '@slonum/kit';
import styles from './FormAuth.module.scss';

interface IForm {
  name: string;
  'email-entry': string;
  password: string;
}

export const FormRegister = () => {
  const { register } = useAuthActions();

  const {
    register: registerInput,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IForm>({ mode: 'onBlur' });

  const onSubmit = async (data: IForm) => {
    await register({
      parentFullName: data.name,
      parentEmail: data['email-entry'],
      password: data.password,
      registrationSource: process.env.NEXT_PUBLIC_FRONT,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputNew
          type="text"
          content="name"
          placeholder="Имя пользователя"
          {...registerInput('name', { ...validateRequired(validations.name) })}
          error={errors.name}
        />
        <InputNew
          type="email"
          content="email"
          placeholder="Ваш E-mail или логин"
          {...registerInput('email-entry', {
            ...validateRequired(validations.email),
          })}
          error={errors['email-entry']}
        />
        <InputNew
          type="password"
          content="password"
          placeholder="Пароль"
          {...registerInput('password', {
            ...validateRequired(validations.password),
          })}
          error={errors.password}
        />
      </div>
      <Button type="submit" className={styles.form__button} disabled={!isValid}>
        Зарегистрироваться
      </Button>
    </form>
  );
};
