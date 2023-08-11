import { FC } from 'react';
import { CheckboxInput, CheckboxLink } from '@ui/components/Checkbox';
import { ICheckboxProps } from '../types';
import { MAIN } from '@slonum/kit';

export const MainCheckbox: FC<ICheckboxProps> = ({
  color,
  isSub,
  reference,
  getIsCheckedState,
}) => {
  return (
    <>
      Отправляя данные, я соглашаюсь с{' '}
      <strong>
        <CheckboxLink
          color={color}
          text="Условиями конкурса"
          href={MAIN + '/terms/use'}
        />
        {' и '}
        <CheckboxLink
          color={color}
          text="Политикой обработки данных"
          href={MAIN + '/terms/policy'}
        />
        <CheckboxInput
          isSub={isSub}
          reference={reference}
          getIsCheckedState={getIsCheckedState}
        />
      </strong>
    </>
  );
};
