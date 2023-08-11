import { FC } from 'react';
import { FormRegister } from './FormRegister';
import { FormLogin } from './FormLogin';
import { FormRecoveryPassword } from './FormRecoveryPassword';

interface IFormAuthProps {
  isEntry?: boolean;
  setIsRecoveryPassword?: (isRecovery: boolean) => void;
  isRecoveryPassword?: boolean;
}

export const FormAuth: FC<IFormAuthProps> = ({
  isEntry,
  setIsRecoveryPassword,
  isRecoveryPassword,
}) => {
  const onClickForgotPassword = () => setIsRecoveryPassword(true);

  if (isRecoveryPassword) return <FormRecoveryPassword />;
  if (!isEntry) return <FormRegister />;
  if (isEntry)
    return <FormLogin onClickForgotPassword={onClickForgotPassword} />;
};
