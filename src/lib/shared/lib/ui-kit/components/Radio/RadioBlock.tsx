import { useState } from 'react';
import { Radio } from './Radio';
import cl from 'classnames';
import styles from './Radio.module.scss';

interface IRadioBlockValue {
  title: string;
  id: number;
}

interface IRadioBlockProps {
  getIsCheckedState: (id: number) => void;
  values: IRadioBlockValue[];
  type?: 'main' | 'light';
  defCheck?: number;
  className?: string;
  name: string;
}

export const RadioBlock: React.FC<IRadioBlockProps> = ({
  getIsCheckedState,
  type = 'main',
  values,
  defCheck,
  className,
  name,
}) => {
  const [value, setValue] = useState<number>(defCheck ?? 1);

  const changeValue = (id: number) => {
    setValue(id);
    getIsCheckedState(id);
  };

  return (
    <div className={cl(className, styles.radiobuttons)}>
      {values.map((v) => (
        <div key={v.id} className={styles.radiobuttons__item}>
          <span>{v.title}</span>
          <Radio
            type={type}
            getIsCheckedState={(v) => changeValue(v)}
            isChecked={v.id === value}
            name={name}
            value={v.id}
          />
        </div>
      ))}
    </div>
  );
};
