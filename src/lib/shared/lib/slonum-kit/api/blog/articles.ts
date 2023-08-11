import { BASE_URL, isServer, agent } from '../common';

export const SERVICE_BLOG = `${BASE_URL}${isServer ? '' : ':3016'}/blog`;

export const getAllArticles = async (status: string) => {
  return agent
    .get(`${SERVICE_BLOG}/article`, {
      params: {
        sortBy: 'createTimeDESC',
        status,
      },
    })
    .then((res) => res.data);
};
export const getArticleById = async (status: string, id: number) => {
  return agent
    .get(`${SERVICE_BLOG}/article/by-id/${id}`, {
      params: {
        status,
      },
    })
    .then((res) => res.data);
};
