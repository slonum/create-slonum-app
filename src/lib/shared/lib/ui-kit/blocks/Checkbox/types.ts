export interface ICheckboxProps {
  color: 'green' | 'white' | 'gray';
  isSubBlock?: boolean;
  subscription?: boolean;
  isSub?: boolean;
  isReg?: boolean;
  isBlank?: boolean;
  children?: React.ReactNode;
  reference?: React.MutableRefObject<any>;
  className?: string;
  isCompit?: boolean;
  isHeader?: boolean;
  getIsCheckedState?: (type: string, isValid: boolean) => void;
  onClick?: () => void;
}
