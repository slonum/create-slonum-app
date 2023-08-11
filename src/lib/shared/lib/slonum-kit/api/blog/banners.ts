import { BASE_URL, agent, isServer } from '../common';
import { IBanner, IBannerBlog } from '../../types';

const SERVICE_BANNERS = `${BASE_URL}${isServer ? '' : ':3016'}/blog/banner`;

//получение баннера по айди
export const fetchBannerById = async (id: number): Promise<IBanner> => {
  return await agent
    .get(`${SERVICE_BANNERS}/by-id/${id}`)
    .then((response) => response.data);
};

//получить последний баннер
export const getLastBannerBlog = async (): Promise<IBannerBlog> => {
  return await agent
    .get(`${SERVICE_BANNERS}-blog/last`)
    .then((response) => response.data);
};
