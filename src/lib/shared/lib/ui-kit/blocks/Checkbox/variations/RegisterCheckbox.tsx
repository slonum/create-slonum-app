import { FC } from 'react';
import { CheckboxInput, CheckboxLink } from '@ui/components/Checkbox';
import { ICheckboxProps } from '../types';
import { MAIN } from '@slonum/kit';

export const RegisterCheckbox: FC<ICheckboxProps> = ({
  color,
  isCompit,
  isSub,
  reference,
  getIsCheckedState,
}) => {
  return (
    <>
      Отправляя данные, я соглашаюсь с{' '}
      <span>
        {isCompit ? (
          <CheckboxLink
            color={color}
            text="Условиями конкурса"
            href={MAIN + '/terms/use'}
          />
        ) : (
          <CheckboxLink
            color={color}
            text="Политикой обработки данных"
            href={MAIN + '/terms/policy'}
          />
        )}
        <CheckboxInput
          isSub={isSub}
          reference={reference}
          getIsCheckedState={getIsCheckedState}
        />
      </span>
    </>
  );
};
