import { BASE_URL, isServer, agent } from '../common';
import { IPostComment } from '../../types';

export const SERVICE_COMMENTS = `${BASE_URL}${
  isServer ? '' : ':3016'
}/blog/comment`;

export const getAllCommentsByArticleId = async (id: number) => {
  return await agent
    .get(`${SERVICE_COMMENTS}/by-article-id/${id}`)
    .then((res) => res.data);
};
export const postComment = async (data: IPostComment) => {
  return await agent.post(`${SERVICE_COMMENTS}/`, data).then((res) => res.data);
};
