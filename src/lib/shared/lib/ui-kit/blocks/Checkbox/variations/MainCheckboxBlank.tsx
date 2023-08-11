import { FC } from 'react';
import { CheckboxLink } from '@ui/components/Checkbox';
import { ICheckboxProps } from '../types';
import { MAIN } from '@slonum/kit';

export const MainCheckboxBlank: FC<ICheckboxProps> = ({ color }) => {
  return (
    <>
      Отправляя данные, я соглашаюсь с{' '}
      <strong>
        <CheckboxLink
          color={color}
          text="Политикой обработки данных"
          href={MAIN + '/terms/policy'}
        />
      </strong>
    </>
  );
};
