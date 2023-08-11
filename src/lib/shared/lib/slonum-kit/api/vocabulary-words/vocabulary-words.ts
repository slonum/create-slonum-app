import { BASE_URL, isServer, agent } from '../common';
import {
  IVocabularyFindWordForStudyResponse,
  IVocabularySaveWordAnswerRequest,
  IVocabularySaveWordAnswerResponse,
  IVocabularySaveWordAnswerAnauthPayload,
  IWords,
  IWordContext,
  IWordDescription,
  IWordDefinition,
} from '../../types';

const SERVICE_VOCABULARY = `${BASE_URL}${
  isServer ? '' : ':3009'
}/vocabulary-word`;

export const fetchAllVocabularyWords = async (
  limit?: number,
): Promise<IWords[]> => {
  return await agent
    .get(`${SERVICE_VOCABULARY}/all`, {
      params: { limit },
    })
    .then((response) => response.data);
};

export const fetchIdVocabularyWords = async (id: number): Promise<IWords> => {
  return await agent
    .get(`${SERVICE_VOCABULARY}/id/${id}`)
    .then((response) => response.data);
};

export const fetchWordVocabularyWords = async (
  word: string,
): Promise<IWords> => {
  return await agent
    .get(`${SERVICE_VOCABULARY}/word/${word}`)
    .then((response) => response.data);
};

export const fetchAddWordsToStudy = async (cls: number): Promise<void> => {
  return await agent.post(`${SERVICE_VOCABULARY}/add-words-to-study/${cls}`);
};
export const fetchGetVocabularyWordsForUnathorizedUser = async (
  cls: number,
  limit: number,
): Promise<IVocabularyFindWordForStudyResponse[]> => {
  return await agent
    .get(`${SERVICE_VOCABULARY}/get-words-for-unauthorized/${cls}`, {
      params: { limit },
    })
    .then((response) => response.data);
};

export const fetchGetVocabularyWordsForLogginedUser = async (
  cls: number,
  limit: number,
  childId?: number,
): Promise<IVocabularyFindWordForStudyResponse[]> => {
  return await agent
    .get(`${SERVICE_VOCABULARY}/get-words/${cls}`, {
      params: { childId, limit },
    })
    .then((response) => response.data);
};

export const fetchSaveWordAnswer = async (
  data: IVocabularySaveWordAnswerRequest,
): Promise<IVocabularySaveWordAnswerResponse> => {
  return await agent
    .post(`${SERVICE_VOCABULARY}/save-word-answer`, data)
    .then((response) => response.data);
};

export const fetchSaveWordAnswerForAnauth = async (
  data: IVocabularySaveWordAnswerAnauthPayload,
): Promise<IVocabularySaveWordAnswerResponse> => {
  return await agent
    .post(`${SERVICE_VOCABULARY}/save-word-answer-for-unauth`, data)
    .then((response) => response.data);
};

export const addVocabularyWordContext = async (
  data: IWordContext,
): Promise<IWords> => {
  return await agent
    .post(`${SERVICE_VOCABULARY}/admin/context/${data.id}`, data)
    .then((response) => response.data);
};
export const editVocabularyWordContext = async (
  data: IWordContext,
): Promise<IWords> => {
  return await agent
    .put(`${SERVICE_VOCABULARY}/admin/context/${data.id}`, data)
    .then((response) => response.data);
};
export const deleteVocabularyWordContext = async (
  id: number,
): Promise<IWords> => {
  return await agent
    .delete(`${SERVICE_VOCABULARY}/admin/context/${id}`)
    .then((response) => response.data);
};
export const editVocabularyWordDescription = async (
  data: IWordDescription,
): Promise<IWords> => {
  return await agent
    .put(`${SERVICE_VOCABULARY}/admin/description/${data.id}`, data)
    .then((response) => response.data);
};
export const editVocabularyWordDefinition = async (
  data: IWordDefinition,
): Promise<IWords> => {
  return await agent
    .put(`${SERVICE_VOCABULARY}/admin/definition/${data.id}`, data)
    .then((response) => response.data);
};
