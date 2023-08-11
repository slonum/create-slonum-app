import { CheckboxLabel } from '@ui/components/Checkbox';
import { ICheckboxProps } from './types';
import { MainCheckbox } from './variations/MainCheckbox';
import { MainCheckboxBlank } from './variations/MainCheckboxBlank';
import { RegisterCheckbox } from './variations/RegisterCheckbox';
import { SubMail } from './variations/SubMail';
import cl from 'classnames';
import styles from './Checkbox.module.scss';

export const CheckboxBlock: React.FC<ICheckboxProps> = ({
  color,
  isSubBlock,
  subscription,
  isReg,
  isSub,
  isBlank,
  reference,
  className,
  isCompit,
  isHeader,
  onClick,
  getIsCheckedState,
}) => {
  const props = { color, isCompit, isSub, reference, getIsCheckedState };

  return (
    <div
      className={cl(
        styles['checkbox'],
        className,
        subscription && styles['checkbox--subscription'],
      )}
      onClick={isReg ? onClick : undefined}
    >
      <CheckboxLabel color={color} isSubBlock={isSubBlock} isHeader={isHeader}>
        {subscription ? (
          <SubMail {...props} />
        ) : isReg ? (
          <RegisterCheckbox {...props} />
        ) : isBlank ? (
          <MainCheckboxBlank {...props} />
        ) : (
          <MainCheckbox {...props} />
        )}
      </CheckboxLabel>
    </div>
  );
};
