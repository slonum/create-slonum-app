import { PayloadAction } from '@reduxjs/toolkit';
import {
  IRole,
  IUserInfoResponseSuccess,
  IUserResponseSuccess,
} from '@slonum/kit';

export interface State {
  data?: IUserResponseSuccess;
  profile?: IUserInfoResponseSuccess;
  role?: 'CHILD' | 'PARENT' | 'ADMIN';
}

export type ISetProfileAction = PayloadAction<IUserInfoResponseSuccess>;
export type ISetDataAction = PayloadAction<IUserResponseSuccess>;
