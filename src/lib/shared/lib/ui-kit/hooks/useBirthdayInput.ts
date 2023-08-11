import { useEffect, useMemo, useState } from 'react';
import { birthDate } from '../../slonum-kit/types';

export const useBirthdayInput = (options?: {
  isAnotherValid?: boolean;
  defaultValues?: birthDate;
}) => {
  const [birthday, setBirthday] = useState<birthDate>({
    day: options?.defaultValues?.day || 'empty',
    month: options?.defaultValues?.month || 'empty',
    year: options?.defaultValues?.year || 'empty',
  });

  const birthdayErrorMsg = useMemo(() => {
    if (Object.values(birthday).some((_value) => _value === 'empty'))
      return 'Введите дату рождения';

    return undefined;
  }, [birthday]);

  const isResultValid = useMemo(
    () =>
      options?.isAnotherValid !== undefined
        ? options.isAnotherValid && !birthdayErrorMsg
        : !birthdayErrorMsg,
    [options?.isAnotherValid, birthdayErrorMsg],
  );

  useEffect(() => {
    if (!options?.defaultValues) return;

    const defaultValues = options.defaultValues;
    setBirthday({
      day: defaultValues.day,
      month: defaultValues.month,
      year: defaultValues.year,
    });
  }, []);

  return { birthday, setBirthday, birthdayErrorMsg, isResultValid };
};
