import { IUserInfoRegisterPayload } from './user-info.interface';

export interface IAuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthLoginPayload {
  login: string;
  password: string;
}

export type IAuthRegisterPayload = IUserInfoRegisterPayload;

export interface IAuthRefreshPayload {
  refreshToken: string;
}

export interface IAuthSendResetPasswordMailPayload {
  mail: string;
}

export interface IAuthResetPasswordPayload {
  password: string;
  passwordConfirm: string;
  accessHash: string;
}

export interface IAuthChangePasswordPayload {
  oldPassword: string;
  password: string;
  passwordConfirm: string;
}

export interface IAuthConfirmEmailPayload {
  emailConfirmHash: string | string[] | undefined;
}
export interface IAuthUnsubscribeEmailPayload {
  email: string;
}

export type IAuthLoginResponseSuccess = IAuthTokens;
export type IAuthRegisterResponseSuccess = IAuthTokens;
export type IAuthRefreshResponseSuccess = IAuthTokens;
