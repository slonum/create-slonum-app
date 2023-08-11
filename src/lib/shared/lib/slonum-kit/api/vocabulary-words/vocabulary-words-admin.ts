import { BASE_URL, isServer, agent } from '../common';
import {
  IVocabularyAddWordPartVariant,
  IVocabularyDeleteWordPartVariant,
} from '../../types';

const SERVICE_VOCABULARY_ADMIN = `${BASE_URL}${
  isServer ? '' : ':3009'
}/vocabulary-word/admin`;

export const fetchAddWordPartVariant = async (
  data: IVocabularyAddWordPartVariant,
  notify?: { create: (arg0: { message: any; type: string }) => void },
): Promise<string | undefined> => {
  try {
    return await agent
      .post(`${SERVICE_VOCABULARY_ADMIN}/add-word-part-variant`, data)
      .then((response) => response.data);
  } catch (e: any) {
    notify &&
      notify.create({
        message: e.response.data.message,
        type: 'error',
      });
  }
};

export const fetchEditWordPartVariant = async (
  data: IVocabularyAddWordPartVariant,
): Promise<string> => {
  return await agent
    .put(`${SERVICE_VOCABULARY_ADMIN}/edit-word-part-variant`, data)
    .then((response) => response.data);
};
export const getWordPartVariantByWord = async (data: string): Promise<any> => {
  return await agent
    .get(`${SERVICE_VOCABULARY_ADMIN}/get-word-part-variant-by-word/${data}`)
    .then((response) => response.data);
};

export const getWordPartVariantById = async (data: number): Promise<any> => {
  return await agent
    .get(`${SERVICE_VOCABULARY_ADMIN}/get-word-part-variant-by-id/${data}`)
    .then((response) => response.data);
};

export const fetchDeleteWordPartVariant = async (
  data: IVocabularyDeleteWordPartVariant,
): Promise<string> => {
  return await agent
    .delete(`${SERVICE_VOCABULARY_ADMIN}/delete-word-part`, { data })
    .then((response) => response.data);
};
