import { AxiosResponse } from 'axios';
import agent, { isServer, BASE_URL } from './agent';
import {
  IAuthLoginPayload,
  IAuthLoginResponseSuccess,
  IAuthRefreshPayload,
  IAuthRefreshResponseSuccess,
  IAuthSendResetPasswordMailPayload,
  IAuthResetPasswordPayload,
  IAuthChangePasswordPayload,
  IAuthConfirmEmailPayload,
} from '../../types';

const SERVICE_AUTH = `${BASE_URL}${isServer ? '' : ':3001'}/auth`;

export const fetchAuthLogin = (
  data: IAuthLoginPayload,
): Promise<AxiosResponse<IAuthLoginResponseSuccess>> => {
  return agent.post(`${SERVICE_AUTH}/login`, data);
};

export const fetchAuthRefresh = (): Promise<
  AxiosResponse<IAuthRefreshResponseSuccess>
> => {
  return agent.post(`${SERVICE_AUTH}/refresh`);
};

export const fetchAuthLogout = (): Promise<AxiosResponse<unknown>> => {
  return agent.post(`${SERVICE_AUTH}/logout`, {
    refreshToken: localStorage.getItem('refreshToken'),
  });
};

export const sendResetPasswordMail = (
  data: IAuthSendResetPasswordMailPayload,
): Promise<AxiosResponse<unknown>> => {
  return agent.post(`${SERVICE_AUTH}/send-reset-password-mail`, data);
};

export const recoverPassword = (
  data: IAuthResetPasswordPayload,
): Promise<AxiosResponse<unknown>> => {
  return agent.post(`${SERVICE_AUTH}/reset-password`, data);
};

export const changePassword = (
  data: IAuthChangePasswordPayload,
): Promise<AxiosResponse<unknown>> => {
  return agent.post(`${SERVICE_AUTH}/change-password`, data);
};

export const confirmEmail = (
  data: IAuthConfirmEmailPayload,
): Promise<AxiosResponse<unknown>> => {
  return agent.post(`${SERVICE_AUTH}/confirm-email`, data);
};
