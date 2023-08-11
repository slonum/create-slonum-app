import { BASE_URL, isServer, agent } from '../common';
import { ILesson, ILessonPayload, IWordsLessonStats } from '../../types';

const SERVICE_VOCABULARY = `${BASE_URL}${
  isServer ? '' : ':3009'
}/vocabulary-word/lesson`;

export const fetchStartLesson = async (
  cls: string | number,
  data: ILessonPayload,
): Promise<ILesson> => {
  return await agent
    .post(`${SERVICE_VOCABULARY}/start/${cls}`, data)
    .then((response) => response.data);
};

export const fetchFinishLesson = async (
  data: ILessonPayload,
  lessonId: number,
): Promise<ILesson> => {
  return await agent
    .post(`${SERVICE_VOCABULARY}/finish/${lessonId}`, data)
    .then((response) => response.data);
};

export const fetchFinishLastLesson = async (
  data: ILessonPayload,
): Promise<ILesson> => {
  return await agent
    .post(`${SERVICE_VOCABULARY}/finish-last`, data)
    .then((response) => response.data);
};

export const fetchFinishAllLesson = async (
  data: ILessonPayload,
): Promise<ILesson> => {
  return await agent
    .post(`${SERVICE_VOCABULARY}/finish-all`, data)
    .then((response) => response.data);
};

export const fetchGetLessonStatsLast = async (
  cls: number,
  childId?: number,
): Promise<IWordsLessonStats> => {
  return await agent
    .get(`${SERVICE_VOCABULARY}-stats/last`, { params: { childId, cls } })
    .then((response) => response.data);
};

export const fetchGetLessonStatsId = async (
  lessonId: number,
  childId: number,
): Promise<IWordsLessonStats> => {
  return await agent
    .get(`${SERVICE_VOCABULARY}-stats/${lessonId}?childId=${childId}`)
    .then((response) => response.data);
};
