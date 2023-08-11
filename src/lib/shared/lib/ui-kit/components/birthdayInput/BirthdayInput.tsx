import { birthDate } from '@slonum/kit';
import styles from './BirthdayInput.module.scss';
import { DateDropDownInput } from '../DateDropDownInput';
import { useEffect, useState } from 'react';

interface IBirthdayInput {
  birthday: birthDate;
  setBirthday: (arg: any) => void;
  birthdayErrMess: string;
}
export const BirthdayInput: React.FC<IBirthdayInput> = ({
  birthday: birthdayIncoming,
  setBirthday: setBirthdayIncoming,
  birthdayErrMess,
}) => {
  const [birthday, setBirthday] = useState<birthDate>({
    day: birthdayIncoming?.day || 'empty',
    month: birthdayIncoming?.month || 'empty',
    year: birthdayIncoming?.year || 'empty',
  });

  const birthDays = Array.from(Array(31).keys()).map((item) =>
    String(item + 1),
  );
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const years = () => {
    const yearsArr = [];
    for (let i = 2022; i > 1930; i--) {
      yearsArr.push(i.toString());
    }
    return yearsArr;
  };

  useEffect(() => {
    setBirthdayIncoming(birthday);
  }, [birthday]);

  return (
    <div className={styles.bday__wrapper}>
      <DateDropDownInput
        content="day"
        type="day"
        name="birthDay"
        form="formReg"
        list={birthDays}
        defaultValue={
          birthday.day !== 'empty' ? birthday?.day?.toString() : undefined
        }
        onClick={(val) => {
          setBirthday({ ...birthday, day: val < 9 ? '0' + val : val });
        }}
        placeholder={'День рождения'}
        ariaLabel="День рождения"
      />
      <DateDropDownInput
        content="month"
        type="month"
        name="birthMonth"
        form="formReg"
        list={months}
        defaultValue={
          birthday.month !== 'empty' ? birthday?.month?.toString() : undefined
        }
        onClick={(val) => {
          setBirthday({
            ...birthday,
            month:
              months.indexOf(val) < 9
                ? '0' + (months.indexOf(val) + 1)
                : (months.indexOf(val) + 1).toString(),
          });
        }}
        placeholder={'Месяц'}
        ariaLabel="Месяц рождения"
      />
      <DateDropDownInput
        content="year"
        type="year"
        name="birthYear"
        form="formReg"
        list={years()}
        defaultValue={
          birthday.year !== 'empty' ? birthday?.year?.toString() : undefined
        }
        onClick={(val) => {
          setBirthday({ ...birthday, year: val });
        }}
        placeholder={'Год'}
        ariaLabel="Год рождения"
      />
      {birthdayErrMess && (
        <p className={styles.bday__error}>{birthdayErrMess}</p>
      )}
    </div>
  );
};

export default BirthdayInput;
