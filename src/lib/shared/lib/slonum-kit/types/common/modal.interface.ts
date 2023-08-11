import { ComponentProps, ReactNode } from 'react';

export interface IModalParams {
  className?: string;
  componentProps?: ComponentProps<any>;
  onClose?: () => void;
  isMini?: boolean;
  isEmpty?: boolean;
  isSwipe?: boolean;
  isNotScroll?: boolean;
  onCloseHandl?: () => void;
  isElephant?: boolean;
  isMenu?: boolean;
}

export interface IModal {
  open: (component: ReactNode | string, props?: IModalParams) => void;
  close: () => void;
}
