import { BASE_URL, isServer, agent } from '../common';
import { IBannerBlog } from '../../types';

const SERVICE_BANNER = `${BASE_URL}${isServer ? '' : ':3016'}/blog/banner-blog`;

//список всех баннеров
export const fetchBannersBlog = async (): Promise<IBannerBlog[]> => {
  return await agent
    .get(`${SERVICE_BANNER}/`)
    .then((response) => response.data);
};

//Сохранение баннера
export const saveBannerBlog = async (
  data: IBannerBlog,
): Promise<IBannerBlog> => {
  return agent.post(`${SERVICE_BANNER}/`, data);
};

//Изменение баннера
export const editBannerBlog = async (
  data: IBannerBlog,
): Promise<IBannerBlog> => {
  return agent.put(`${SERVICE_BANNER}/`, data);
};

//получить баннер по айди
export const getBannerBlogById = async (id: number): Promise<IBannerBlog> => {
  return await agent
    .get(`${SERVICE_BANNER}/by-id/${id}`)
    .then((response) => response.data);
};

//получить последний баннер
export const getLastBannerBlog = async (): Promise<IBannerBlog> => {
  return await agent
    .get(`${SERVICE_BANNER}/last`)
    .then((response) => response.data);
};

//Удаление баннера по id
export const deleteBannerBlog = async (id: number): Promise<any> => {
  return await agent.delete(`${SERVICE_BANNER}/${id}`, {
    data: { id },
  });
};
