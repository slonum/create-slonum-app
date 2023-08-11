import { AxiosResponse } from 'axios';
import agent, { BASE_URL, isServer } from './agent';
import {
  IUserInfoPayload,
  IUserInfoResponseSuccess,
  IUserInfoUpdateUserPayload,
  IUserInfoRegisterResponseSuccess,
  IUserInfoRegisterPayload,
  IUserInfoRegisterAndLoginResponseSuccess,
  IUserInfoChildPayload,
  IUserInfoAvatarLink,
  IAddAvatarPayload,
  IGetUsersByAdmin,
  IAddChildResponse,
} from '../../types';

export const SERVICE_USER_INFO = `${BASE_URL}${
  isServer ? '' : ':3003'
}/user-info`;

export const fetchUserInfoCreate = (
  data: IUserInfoPayload,
): Promise<AxiosResponse<IUserInfoResponseSuccess>> => {
  return agent.post(`${SERVICE_USER_INFO}`, data);
};

//изменение данных пользователя
export const fetchUserInfoChange = (
  data: IUserInfoUpdateUserPayload,
): Promise<AxiosResponse<IUserInfoResponseSuccess>> => {
  return agent.put(`${SERVICE_USER_INFO}/update`, data);
};

export const fetchUserInfoMe = (): Promise<
  AxiosResponse<IUserInfoResponseSuccess>
> => {
  return agent.get(`${SERVICE_USER_INFO}`);
};

export const fetchUserInfoId = (
  id: number,
): Promise<AxiosResponse<IUserInfoRegisterResponseSuccess>> => {
  return agent.get(`${SERVICE_USER_INFO}/${id}`);
};

export const fetchRegister = (
  data: IUserInfoRegisterPayload,
): Promise<AxiosResponse<IUserInfoRegisterAndLoginResponseSuccess>> => {
  return agent.post(`${SERVICE_USER_INFO}/register`, data);
};

export const fetchUserInfoAddChild = (data: IUserInfoChildPayload) => {
  return agent.post<IAddChildResponse>(`${SERVICE_USER_INFO}/add-child`, data);
};

//Обновление аватарки пользователя
export const saveAvatar = (
  data: IAddAvatarPayload,
): Promise<AxiosResponse<IAddAvatarPayload>> => {
  return agent.post(`${SERVICE_USER_INFO}/save-avatar`, data);
};

//Получение зарегистрированных пользователей
export const fetchGetUsersByAdmin = (): Promise<
  AxiosResponse<IGetUsersByAdmin>
> => {
  return agent.get(`${SERVICE_USER_INFO}/admin/get-by-date`);
};
