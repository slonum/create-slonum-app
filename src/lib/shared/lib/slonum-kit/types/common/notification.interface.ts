export interface INotificationProps {
  type: INotificationType;
  message?: string;
  onDelete: () => void;
  autoClose?: boolean;
  onClick?: () => void;
  isDelete?: boolean;
}

export interface INotificationChildProps {
  type: INotificationType;
  message?: string;
  isClosing: boolean;
  setIsClosing: (isClosing: boolean) => void;
}

export interface ICreateToastProps {
  type: INotificationType;
  message: string;
  autoClose?: boolean;
  onClick?: () => void;
  isDelete?: boolean;
}

export interface INotificationConnector {
  id: number;
  props: ICreateToastProps;
}

export interface INotify {
  create: (props: ICreateToastProps) => void;
}

export type INotificationType =
  | 'success'
  | 'error'
  | 'registration'
  | 'mail'
  | 'lock';
