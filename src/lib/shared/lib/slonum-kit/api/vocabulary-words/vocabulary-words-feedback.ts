import { BASE_URL, isServer, agent } from '../common';
import { IFeedback } from '../../types';

const SERVICE_FAQ = `${BASE_URL}${isServer ? '' : ':3004'}/service-faq`;

export const sendFeedback = async (data?: IFeedback): Promise<void> => {
  return await agent.post(`${SERVICE_FAQ}/faq/add-feedback`, data);
};
