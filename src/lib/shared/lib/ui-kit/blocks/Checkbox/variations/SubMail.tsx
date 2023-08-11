import { FC } from 'react';
import { CheckboxInput } from '@ui/components/Checkbox';
import { ICheckboxProps } from '../types';

export const SubMail: FC<ICheckboxProps> = ({
  isSub,
  reference,
  getIsCheckedState,
}) => {
  return (
    <>
      Подписаться на нашу рассылку
      <CheckboxInput
        isSub={isSub}
        reference={reference}
        getIsCheckedState={getIsCheckedState}
      />
    </>
  );
};
