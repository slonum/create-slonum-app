import { AxiosRequestConfig } from 'axios';
import agent, { BASE_URL, isServer } from './agent';
import { IAuthUnsubscribeEmailPayload } from '../../types';

const MAIL_URL = `${BASE_URL}${isServer ? '' : ':3005'}/subscription/`;
export const requestEmailSubscribe = async (
  email: string,
  isMes?: boolean,
  notify?: { create: (args: { message: string; type: string }) => void },
) => {
  try {
    await agent.post(MAIL_URL, { email });
    if (isMes) {
      notify &&
        notify.create({
          message: 'Спасибо! \n Вы успешно подписались',
          type: 'success',
        });
    }
  } catch (e: any) {
    if (e?.response?.data?.message) {
      notify &&
        notify.create({
          message: e.response.data.message,
          type: 'error',
        });
    }
  }
};

export const subscribeEmail = async (data: { email: string }): Promise<any> => {
  return await agent.post(`${MAIL_URL}`, data);
};

export const unsubscribeEmail = (
  data: IAuthUnsubscribeEmailPayload,
): Promise<AxiosRequestConfig<unknown>> => {
  return agent.delete(MAIL_URL, { data: data });
};
