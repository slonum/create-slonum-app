import { BASE_URL, isServer, agent } from '../common';

export const SERVICE_LIKE = `${BASE_URL}${isServer ? '' : ':3016'}/blog/like`;

export const addLike = async (articleId: number): Promise<any> => {
  return await agent.post(`${SERVICE_LIKE}/make-like/${articleId}`);
};

export const removeLike = async (articleId: number): Promise<any> => {
  return await agent.delete(`${SERVICE_LIKE}/delete-like/${articleId}`, {
    data: { articleId },
  });
};
