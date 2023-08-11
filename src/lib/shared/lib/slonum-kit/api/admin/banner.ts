import { BASE_URL, isServer, agent } from '../common';
import { IBanner } from '../../types';

const SERVICE_BANNER = `${BASE_URL}${isServer ? '' : ':3016'}/blog/banner`;

//список всех баннеров
export const fetchAllBanners = async (status: string): Promise<IBanner[]> => {
  return await agent
    .get(`${SERVICE_BANNER}/`, { params: status })
    .then((response) => response.data);
};

//получение баннера по айди
export const fetchBannerById = async (id: number): Promise<IBanner> => {
  return await agent
    .get(`${SERVICE_BANNER}/by-id/${id}`)
    .then((response) => response.data);
};

//Изменение баннера
export const editBanner = async (data: IBanner): Promise<IBanner> => {
  return agent.put(`${SERVICE_BANNER}/`, data);
};

//Сохранение баннера
export const saveBanner = async (data: IBanner): Promise<IBanner> => {
  return agent.post(`${SERVICE_BANNER}/`, data);
};

//Сделать баннер удаленным
export const makeBannerDeleted = async (id: number): Promise<IBanner> => {
  return agent.post(`${SERVICE_BANNER}/make-deleted/${id}`);
};

//Сделать баннер скрытым
export const makeBannerHidden = async (id: number): Promise<IBanner> => {
  return agent.post(`${SERVICE_BANNER}/make-hidden/${id}`);
};

//Сделать баннер активным
export const makeBannerActive = async (id: number): Promise<IBanner> => {
  return agent.post(`${SERVICE_BANNER}/make-active/${id}`);
};
