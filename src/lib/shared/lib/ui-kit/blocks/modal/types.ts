import { ComponentProps, ReactNode } from 'react';
export interface IModalParams {
  className?: string;
  componentProps?: ComponentProps<any>;
  isMini?: boolean;
  isEmpty?: boolean;
  isSwipe?: boolean;
  isNotScroll?: boolean;
  isNotClose?: boolean;
  isElephant?: boolean;
  isMenu?: boolean;
  isNullModal?: boolean;
  style?: {
    mobileBottom?: boolean;
    mobileSwipe?: boolean;
  };
  onClose?: () => void;
  onCloseHandl?: () => void;
}
export interface IModal {
  open: (component: ReactNode | string, props?: IModalParams) => void;
  close: () => void;
}
