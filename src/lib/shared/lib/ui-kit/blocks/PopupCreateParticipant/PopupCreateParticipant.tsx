import { FC } from 'react';
import { H3 } from '@ui/components/Typography/H';
import { InputNew } from '@ui/components/InputNew';
import { Button } from '@ui/components/Button';
import { useAuthActions } from '@ui/hooks/redux-hooks';
import {
  IParticipantInfo,
  IRegisterExistChildRequest,
  IUserInfoAvatarLink,
  IUserInfoChildPayload,
  validateRequired,
  validations,
} from '@slonum/kit';
import { CheckboxNew } from '../../components/CheckboxNew';
import { useForm } from 'react-hook-form';
import { modal } from '../modal';
import { PopupChoiceChild } from '../PopupChoiceChild';
import styles from './PopupCreateParticipant.module.scss';
import { BirthdayInput } from '@ui/components/birthdayInput';
import { useBirthdayInput } from '@ui/hooks/useBirthdayInput';

interface IForm {
  participantName: string;
  isAgree: boolean;
}

interface IPopupCreateParticipantProps {
  exerciseGroudId: string;
  registerExitChildRequest: (
    data: IRegisterExistChildRequest,
  ) => Promise<IParticipantInfo>;
  childs?: IUserInfoAvatarLink[];
}

export const PopupCreateParticipant: FC<IPopupCreateParticipantProps> = ({
  exerciseGroudId,
  registerExitChildRequest,
  childs,
}) => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<IForm>({ mode: 'onBlur' });

  const { birthday, birthdayErrorMsg, isResultValid, setBirthday } =
    useBirthdayInput({ isAnotherValid: isValid });

  const { registerChild } = useAuthActions();

  const onSubmit = async (data: IForm) => {
    const registerNewChildRequest: IUserInfoChildPayload = {
      childFullName: data.participantName,
      birthDate: `${birthday?.year}-${birthday?.month}-${birthday?.day}`,
    };

    await registerChild(registerNewChildRequest);
  };

  const onClickBack = () => {
    if (childs?.length) {
      modal.open(
        <PopupChoiceChild
          childs={childs}
          exerciseGroupId={exerciseGroudId}
          registerExitChildRequest={registerExitChildRequest}
        />,
      );
      return;
    }

    modal.close();
  };

  return (
    <div className={styles.popup}>
      <H3 className={styles.popup__title}>Создание аккаунта участника</H3>
      <form className={styles.popup__form} onSubmit={handleSubmit(onSubmit)}>
        <InputNew
          type="participantName"
          content="participantName"
          placeholder="Имя и фамилия участника"
          {...register('participantName', {
            ...validateRequired(validations.participantName),
          })}
          error={errors.participantName}
        />
        <div className={styles.popup__birthday}>
          <BirthdayInput
            birthday={birthday}
            setBirthday={setBirthday}
            birthdayErrMess={isValid && birthdayErrorMsg}
          />
        </div>
        <div className={styles.popup__buttons}>
          <Button
            variant="light"
            className={styles.popup__backButton}
            onClick={onClickBack}
          >
            Назад
          </Button>
          <Button type="submit" disabled={!isResultValid}>
            Добавить аккаунт
          </Button>
        </div>
      </form>

      <CheckboxNew
        content="policy"
        {...register('isAgree', { required: true })}
        isDefaultChecked
      />
    </div>
  );
};
