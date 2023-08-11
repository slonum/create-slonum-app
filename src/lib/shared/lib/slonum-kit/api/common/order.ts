import { AxiosResponse } from 'axios';
import agent, { BASE_URL, isServer } from './agent';
import { IMakeOrderPayload } from '../../types';

const SERVICE_ORDER = `${BASE_URL}${isServer ? '' : ':3013'}/order`;

export const fetchOrderMake = async (
  data: IMakeOrderPayload,
): Promise<AxiosResponse<any>> => {
  return agent.post(`${SERVICE_ORDER}/make`, data);
};
