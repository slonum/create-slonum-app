import { BASE_URL, isServer, agent } from '../common';
import {
  IVocabularyWordAnswer,
  IGetUserStatsForClassResponse,
  IGetUserStatsResponse,
  IVocabularyWordsCount,
} from '../../types';

const SERVICE_VOCABULARY_WORD_STATS = `${BASE_URL}${
  isServer ? '' : ':3009'
}/vocabulary-word/word-stats`;

export const fetchGetUserAnswersForWord = async (
  vocabularyWordId: number,
): Promise<IVocabularyWordAnswer[]> => {
  return await agent
    .get(`${SERVICE_VOCABULARY_WORD_STATS}/user-answer`, {
      params: { vocabularyWordId },
    })
    .then((response) => response.data);
};

export const fetchGetUserStatsForClass = async (
  cls: number,
  childId?: number,
): Promise<IGetUserStatsForClassResponse> => {
  return await agent
    .get(`${SERVICE_VOCABULARY_WORD_STATS}/studied-words-in-class/${cls}`, {
      params: { childId },
    })
    .then((response) => response.data);
};

export const fetchGetUserStats = async (
  childId?: number,
): Promise<IGetUserStatsResponse> => {
  return await agent
    .get(`${SERVICE_VOCABULARY_WORD_STATS}`, {
      params: { childId },
    })
    .then((response) => response.data);
};

export const fetchWordCountForClass = async (
  cls?: string | number,
): Promise</* IGetCountWordsResponse |  */ IVocabularyWordsCount> => {
  return await agent
    .get(
      `${SERVICE_VOCABULARY_WORD_STATS}/word-count${cls ? `?cls=${cls}` : '/'}`,
    )
    .then((response) => response.data);
};

export const fetchGetUserStatsAllClass = async (
  childId?: number,
): Promise<IGetUserStatsForClassResponse> => {
  return await agent
    .get(`${SERVICE_VOCABULARY_WORD_STATS}/studied-words-in-all-classes`, {
      params: { childId },
    })
    .then((response) => response.data);
};

export const fetchGetUserStatsStudiedClass = async (
  childId?: number,
): Promise<IGetUserStatsForClassResponse> => {
  return await agent
    .get(`${SERVICE_VOCABULARY_WORD_STATS}/studied-words-in-studied-classes`, {
      params: { childId },
    })
    .then((response) => response.data);
};
