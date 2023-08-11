import React, { FC, useEffect } from 'react';
import { DropDownList } from '@ui/components/DropDownList';
import styles from './ClassDropList.module.scss';
import cl from 'classnames';

interface IClassDropList {
  className?: string;
  onChange?: (index: number, value: string) => void;
  multiChange?: (value: number[]) => void;
  isMultiCheck?: boolean;
  changeListClass?: (value: number[]) => void;
  defaultValue?: number[];
  reset?: () => void;
}

export const ClassDropList: FC<IClassDropList> = ({
  className,
  multiChange,
  onChange,
  isMultiCheck,
  changeListClass,
  defaultValue,
}) => {
  const classesValue =
    defaultValue?.length && Array.isArray(defaultValue)
      ? defaultValue?.map((i) => String(i)).join(', ')
      : 'Выберите класс';
  useEffect(() => {
    if (defaultValue && multiChange) {
      multiChange(defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  return (
    <DropDownList
      className={cl(className, styles.droplist)}
      defaultValue={classesValue}
      list={['Дошкольная олимпиада'].concat(
        [...Array(10)].map((m, i) => {
          if (i === 9) {
            return i + 1 + '-11 класс';
          } else return i + 1 + ' Класс';
        }),
      )}
      placeholder="Выбор класса"
      stylePar={styles}
      onClick={({ index, value }) => {
        onChange && onChange(index, value);
      }}
      isMultiCheck={isMultiCheck}
      isToggle
      multiTitle={'класс'}
      multiChange={(value) => {
        multiChange && multiChange(value);
      }}
      changeListClass={changeListClass}
    />
  );
};
