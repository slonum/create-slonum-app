import { AxiosResponse } from 'axios';
import agent, { BASE_URL, isServer } from './agent';
import { IUserResponseSuccess, IUserDeleteResponseSucess } from '../../types';

const SERVICE_USERS = `${BASE_URL}${isServer ? '' : ':3001'}/users`;

export const fetchUsersMe = (): Promise<
  AxiosResponse<IUserResponseSuccess>
> => {
  return agent.get(`${SERVICE_USERS}/me`);
};
export const deleteUser = (
  id: number,
): Promise<AxiosResponse<IUserDeleteResponseSucess>> => {
  return agent.delete(`${SERVICE_USERS}/${id}`);
};
