import { BASE_URL, isServer, agent } from '../common';
import {
  ICreateArticlesTopic,
  IEditArticlesTopics,
  ITopicById,
  IRelatedArticles,
  IArticlesSortBy,
  ICreateArticle,
  IChangeStatusArticle,
  ITagListInArticle,
  ITagInArticle,
  ITag,
} from '../../types';

const SERVICE_ADMIN = `${BASE_URL}${isServer ? '' : ':3016'}/blog/admin`;
const SERVICE_TAG = `${BASE_URL}${isServer ? '' : ':3016'}/blog/admin/tag`;

//РАЗДЕЛЫ СТАТЕЙ

//Получение списка разделов статей
export const fetchTopicList = async (data: any): Promise<any> => {
  return await agent
    .get(`${SERVICE_ADMIN}/topic`, data)
    .then((response) => response.data);
};

//Создание раздела
export const createTopic = async (data: ICreateArticlesTopic): Promise<any> => {
  return await agent.post(`${SERVICE_ADMIN}/topic`, data);
};

//Редактирование раздела
export const editTopic = async (data: IEditArticlesTopics): Promise<any> => {
  return await agent.put(`${SERVICE_ADMIN}/topic`, data);
};

//Получение раздела по id
export const fetchTopicById = async (filter: ITopicById): Promise<any> => {
  return await agent.get(`${SERVICE_ADMIN}/topic/by-id/${filter.id}`, {
    params: filter,
  });
};

//Удаление раздела по id
export const deleteTopic = async (id: number): Promise<any> => {
  return await agent.delete(`${SERVICE_ADMIN}/topic/by-id/${id}`, {
    data: { id },
  });
};

//Добавить связанные статьи
export const addRelatedArticles = async (
  data: IRelatedArticles,
): Promise<any> => {
  return await agent.post(
    `${SERVICE_ADMIN}/article/add-related-articles`,
    data,
  );
};

//СТАТЬИ

//Получить все статьи
export const getAllArticles = async (data: IArticlesSortBy): Promise<any> => {
  return await agent
    .get(`${SERVICE_ADMIN}/article`, {
      params: {
        ...data,
      },
    })
    .then((response) => response.data);
};

//Сохранение статьи как черновика
export const saveDraftArticle = async (data: ICreateArticle): Promise<any> => {
  return await agent.post(`${SERVICE_ADMIN}/article`, data);
};

//Получить статью по id
export const getArticleById = async (id: number): Promise<any> => {
  return await agent
    .get(`${SERVICE_ADMIN}/article/by-id/${id}`)
    .then((response) => response.data);
};

//Сохранить статью и сразу опубликовать
export const saveAndPublishNowArticle = async (
  data: ICreateArticle,
): Promise<any> => {
  return await agent.post(
    `${SERVICE_ADMIN}/article/save-and-publish-now`,
    data,
  );
};

//Сохранить статью и опубликовать ко времени
export const saveAndPublishAtTimeArticle = async (
  data: ICreateArticle,
): Promise<any> => {
  return await agent.post(
    `${SERVICE_ADMIN}/article/save-and-publish-at-time`,
    data,
  );
};

//Сохранить изменения в статье (без публикации)
export const saveChanges = async (data: ICreateArticle): Promise<any> => {
  return await agent.put(`${SERVICE_ADMIN}/article/edit-and-save`, data);
};

//Сделать статью видимой
export const makeArticleVisible = async (
  id: number,
): Promise<IChangeStatusArticle> => {
  return await agent.post(`${SERVICE_ADMIN}/article/make-visible/${id}`);
};

//Сделать статью невидимой
export const makeArticleNotVisible = async (
  id: number,
): Promise<IChangeStatusArticle> => {
  return await agent.post(`${SERVICE_ADMIN}/article/make-not-visible/${id}`);
};

//Сделать статью удаленной
export const makeArticleDeleted = async (
  id: number,
): Promise<IChangeStatusArticle> => {
  return await agent.post(`${SERVICE_ADMIN}/article/make-deleted/${id}`);
};

//Сделать статью неудаленной
export const makeArticleNotDeleted = async (
  id: number,
): Promise<IChangeStatusArticle> => {
  return await agent.post(`${SERVICE_ADMIN}/article/make-not-deleted/${id}`);
};

//Опубликовать статью
export const publishArticle = async (
  id: number,
): Promise<IChangeStatusArticle> => {
  return await agent.post(`${SERVICE_ADMIN}/article/publish-now/${id}`);
};

//Опубликовать статью ко времени
export const publishArticleAtTime = async (
  id: number,
  time: string,
): Promise<IChangeStatusArticle> => {
  return await agent.post(
    `${SERVICE_ADMIN}/article/publish-at-time/${id}`,
    time,
  );
};
//"time": "2023-01-19T03:23:23.888"

//Отменить публикацию статьи ко времени
export const cancelPublishArticleAtTime = async (
  id: number,
): Promise<IChangeStatusArticle> => {
  return await agent.post(
    `${SERVICE_ADMIN}/article/cancel-publish-at-time/${id}`,
  );
};

//перезапустить публикацию ко времени
export const restartPublishArticleAtTime =
  async (): Promise<IChangeStatusArticle> => {
    return await agent.post(`${SERVICE_ADMIN}/article/restart-publish-at-time`);
  };

//обновить время прочтения
//todo: удалить после загрузки на дев
export const updateReadingTime = async (): Promise<any> => {
  return await agent.post(`${SERVICE_ADMIN}/article/update-reading-time`);
};

//ТЕГИ

//Получение списка всех тегов
export const fetchTagList = async (): Promise<string[]> => {
  return await agent
    .get(`${SERVICE_TAG}/get-all`)
    .then((response) => response.data);
};

//Добавить список тегов к статье
export const addTagsToArticle = async (
  data: ITagListInArticle,
): Promise<any> => {
  return agent.post(`${SERVICE_TAG}/add-to-article`, data);
};

//Удалить тег из статьи
export const deleteTagFromArticle = async (
  data: ITagInArticle,
): Promise<any> => {
  return agent.delete(`${SERVICE_TAG}/delete-from-article`, {
    data,
  });
};

//Удалить тег из всех статей
export const deleteTagsFromAllArticles = async (data: ITag): Promise<any> => {
  return agent.delete(`${SERVICE_TAG}/delete-from-all-articles`, {
    data,
  });
};
