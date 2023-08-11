import { useEffect, useState } from 'react';
import cl from 'classnames';
import styles from './Radio.module.scss';

interface IRadioProps {
  reference?: React.MutableRefObject<any>;
  isChecked?: boolean;
  type?: 'main' | 'light';
  name: string;
  value: number;
  getIsCheckedState?: (value: number) => void;
}

export const Radio: React.FC<IRadioProps> = ({
  getIsCheckedState,
  reference,
  isChecked = false,
  type = 'main',
  name,
  value,
}) => {
  const [checked, setChecked] = useState(isChecked);
  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);
  return (
    <div className={styles.radio}>
      <input
        type="radio"
        value={value}
        name={name}
        ref={reference}
        className={cl(styles['radio__input'], styles['radio__input--' + type])}
        checked={checked}
        onChange={(e) => {
          !!getIsCheckedState && getIsCheckedState(+e.target.value);
          setChecked(e.target.checked);
        }}
      />
      {checked && (
        <div
          className={cl(styles['radio__tick'], styles['radio__tick--' + type])}
        />
      )}
    </div>
  );
};
