import { AxiosResponse } from 'axios';
import { BASE_URL, isServer, agent } from '../common';
import {
  IAddWordListPayload,
  IWordsList,
  IDeleteWordListPayload,
  IRenameWordListPayload,
  IAddWordToListPayload,
  IAddWordToListResponse,
  IDeleteWordFromListPayload,
  IGetWordListPayload,
  IWordsUserList,
  IEnglishWordList,
  IGetUserWordForEnglishListResponse,
  IEnglishTrainingStart,
  IEnglishAnswerPayload,
  ITrainEnglishResponse,
  ILessonEnStats,
  IEnglishGEtWordList,
  IEnglishGEtWord,
  IEnglishSentenceRandom,
  IEnglishSentence,
  IEnglishCreateSentencePayload,
  IWordUser,
} from '../../types';

const SERVICE_ENGLISH_LANG = `${BASE_URL}${
  isServer ? '' : ':3002'
}/english-lang`;

// меняет статус слова на in_process
export const fetchAddToStudy = (
  wordId: number | string,
): Promise<AxiosResponse<IWordUser>> => {
  return agent.post(`${SERVICE_ENGLISH_LANG}/word/add-to-study`, { wordId });
};

// меняет статус слова на studied
export const fetchSetWordStudied = (
  wordId: number | string,
): Promise<AxiosResponse<IWordUser>> => {
  return agent.post(`${SERVICE_ENGLISH_LANG}/word/set-word-studied`, {
    wordId,
  });
};

export const fetchGetRatingGlobal = async (): Promise<AxiosResponse<any>> => {
  return agent.get(`${SERVICE_ENGLISH_LANG}/words-rating/global`);
};

export const fetchGetRatingOneFile = async (
  textId: string | number,
  hide: string | undefined,
  hidePreposition: boolean,
  limit: number,
  page: number,
): Promise<AxiosResponse<any> | { data: null }> => {
  return agent
    .get(`${SERVICE_ENGLISH_LANG}/words-rating/one-file/${textId}`, {
      params: {
        hide,
        hidePreposition,
        limit,
        page,
      },
    })
    .catch((e) => {
      console.log(e);
      return { data: null };
    });
};

export const fetchAddWordList = (
  data: IAddWordListPayload,
): Promise<AxiosResponse<IWordsList>> => {
  return agent.post(`${SERVICE_ENGLISH_LANG}/word-list`, data);
};

export const fetchDeleteWordList = ({
  id,
  childId,
}: IDeleteWordListPayload): Promise<AxiosResponse<IWordsList>> => {
  return agent.delete(`${SERVICE_ENGLISH_LANG}/word-list/${id}`, {
    data: { childId },
  });
};

export const fetchRenameWordList = ({
  id,
  newName,
  childId,
}: IRenameWordListPayload): Promise<AxiosResponse<IWordsList>> => {
  return agent.put(`${SERVICE_ENGLISH_LANG}/word-list/${id}`, {
    childId,
    newName,
  });
};

export const fetchAddWordToList = (
  data: IAddWordToListPayload,
): Promise<AxiosResponse<IAddWordToListResponse>> => {
  return agent.post(`${SERVICE_ENGLISH_LANG}/word-list/${data.id}/add-word`, {
    word: data.word,
    translation: data.translation,
  });
};

export const fetchDeleteWordFromList = (
  data: IDeleteWordFromListPayload,
): Promise<AxiosResponse<IWordsList>> => {
  return agent.delete(
    `${SERVICE_ENGLISH_LANG}/word-list/${data.id}/delete-word`,
    {
      data: { enWordUserId: data.enWordUserId },
    },
  );
};

export const fetchGetAllWordList = async (
  data: IGetWordListPayload,
): Promise<AxiosResponse<IWordsUserList[]>> => {
  return await agent.get(`${SERVICE_ENGLISH_LANG}/word-list/get-all-list`, {
    params: { childId: data ? data.childId : undefined },
  });
};

export const fetchGetWordListById = async (
  listId: number,
  childId: number,
): Promise<IEnglishWordList> => {
  return await agent
    .get(`${SERVICE_ENGLISH_LANG}/word-list/${listId}/get`, {
      params: { childId },
    })
    .then((res) => res.data);
};

export const fetchGetWordListByIdForTraining = async (
  id: number,
  limit?: number,
): Promise<IGetUserWordForEnglishListResponse[]> => {
  return await agent.get(
    `${SERVICE_ENGLISH_LANG}/get-words/${id}?${limit && 'limit=' + limit}`,
  );
};

export const fetchStartTraining = async (
  listId: number,
): Promise<AxiosResponse<IEnglishTrainingStart>> => {
  return await agent.post(`${SERVICE_ENGLISH_LANG}/lesson/start/${listId}`);
};

export const fetchFinishTraining = async (
  listId: number,
): Promise<AxiosResponse<IEnglishTrainingStart>> => {
  return await agent.post(`${SERVICE_ENGLISH_LANG}/lesson/finish/${listId}`);
};

export const fetchFinishLastTraining = async (): Promise<
  AxiosResponse<IEnglishTrainingStart>
> => {
  return await agent.post(`${SERVICE_ENGLISH_LANG}/lesson/finish-last`);
};

export const fetchFinishAllTraining = async (): Promise<
  AxiosResponse<IEnglishTrainingStart>
> => {
  return await agent.post(`${SERVICE_ENGLISH_LANG}/lesson/finish-all`);
};

export const fetchSaveEnglishAnswer = async (
  data: IEnglishAnswerPayload,
): Promise<AxiosResponse<IEnglishAnswerPayload>> => {
  return await agent.post(`${SERVICE_ENGLISH_LANG}/save-word-answer`, data);
};

export const fetchGetUserAnswersEnglish = async (
  wordId: number,
): Promise<any[]> => {
  return await agent
    .get(`${SERVICE_ENGLISH_LANG}/word-stats/user-answer`, {
      params: { wordId },
    })
    .then((response) => response.data);
};

export const fetchGetUserStatsForEnglishList = async (
  listId: number,
  childId?: number,
): Promise<ITrainEnglishResponse> => {
  return await agent
    .get(
      `${SERVICE_ENGLISH_LANG}/word-stats/studied-words-in-word-list/${listId}`,
      {
        params: { childId },
      },
    )
    .then((response) => response.data);
};

export const fetchGetWordStatsEnglish = async (
  childId?: number,
): Promise<any> => {
  return await agent
    .get(`${SERVICE_ENGLISH_LANG}/word-stats`, {
      params: { childId },
    })
    .then((response) => response.data);
};

export const fetchGetLessonStatsLastEnglish = async (
  listId: number,
  childId?: number,
): Promise<ILessonEnStats> => {
  return await agent
    .get(`${SERVICE_ENGLISH_LANG}/lesson-stats/last`, {
      params: { listId, childId },
    })
    .then((response) => response.data);
};

export const fetchGetLessonStatsIdEnglish = async (
  lessonId: number,
  childId?: number,
): Promise<ILessonEnStats> => {
  return await agent
    .get(`${SERVICE_ENGLISH_LANG}/lesson-stats/${lessonId}`, {
      params: { childId },
    })
    .then((response) => response.data);
};

export const assignUserToTextId = async (
  textId: number,
  cookie?: string | number | boolean,
): Promise<any> => {
  const options = {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  };
  return await agent
    .post(
      `${SERVICE_ENGLISH_LANG}/link-text-to-user/${textId}`,
      cookie ? options : undefined,
    )
    .catch((e) => console.log(e));
};

// WORD-TRANSLATION

// получить список слов с переводом
export const fetchGetAllEnWords = (
  limit: number,
  page: number,
  withWordsWithoutTranslation: boolean,
): Promise<AxiosResponse<IEnglishGEtWordList>> => {
  return agent.get(`${SERVICE_ENGLISH_LANG}/admin/word-translation`, {
    params: { limit, page, withWordsWithoutTranslation },
  });
};

// получить слово с переводом по значению
export const fetchGetEnWordByWord = (
  word: string,
): Promise<AxiosResponse<IEnglishGEtWord>> => {
  return agent.get(`${SERVICE_ENGLISH_LANG}/admin/word-translation/${word}`);
};

// изменить перевод
export const fetchEditEnTranslate = (
  wordId: string | number,
  translations: string[],
): Promise<AxiosResponse<IEnglishGEtWord>> => {
  const translationsJoined = translations.join(',');
  return agent.put(
    `${SERVICE_ENGLISH_LANG}/admin/word-translation/edit-word-translations/${wordId}`,
    {
      translations,
      translationsJoined,
    },
  );
};

// SAMPLE-SENTENCE

// получить рандомные предложения
export const fetchGetRandomSentence = (
  wordId: string | number,
): Promise<AxiosResponse<IEnglishSentenceRandom[]>> => {
  return agent.get(
    `${SERVICE_ENGLISH_LANG}/sample-sentence/get-random/${wordId}`,
  );
};

// получить список предложений
export const fetchGetListSentence = (
  wordId: string | number,
): Promise<AxiosResponse<IEnglishSentence[]>> => {
  return agent.get(
    `${SERVICE_ENGLISH_LANG}/sample-sentence/get-list/${wordId}`,
  );
};

// удалить предложение
export const fetchDeleteSentence = (
  id: number,
): Promise<AxiosResponse<IEnglishSentence>> => {
  return agent.delete(`${SERVICE_ENGLISH_LANG}/sample-sentence/delete/${id}`);
};

// добавить предложниe к слову
export const fetchCreateSentenceForWord = (
  data: IEnglishCreateSentencePayload,
): Promise<AxiosResponse<IEnglishSentence>> => {
  return agent.post(`${SERVICE_ENGLISH_LANG}/sample-sentence/create`, data);
};
interface IEnglishTopParams {
  take: number;
  exclude: number;
  hidePrepositions: boolean;
  hide?: 'in_process' | 'studied';
  page: number;
}
export const getTopList = async ({
  take,
  exclude,
  hidePrepositions,
  page = 1,
  hide,
}: IEnglishTopParams) => {
  return agent
    .get(`${SERVICE_ENGLISH_LANG}/words-top/top-words`, {
      params: {
        take,
        exclude,
        hidePrepositions,
        hide,
        page,
      },
    })
    .then((res) => res.data);
};

//кнопки "В список изучений" и "В списке изучений"
export const changeStudyListStatus = async (bookId: number) => {
  return agent.post(
    `${SERVICE_ENGLISH_LANG}/book-user/toggle-book-study-list-status/${bookId}`,
  );
};

//Изучать снова, Отметить изученным
export const changeReadStatus = async (bookId: number) => {
  return agent.put(
    `${SERVICE_ENGLISH_LANG}/book-user/toggle-is-read-status/${bookId}`,
  );
};

//для топов
//кнопки "В список изучений" и "В списке изучений"
export const changeTopListStatus = async (words_top: number) => {
  return agent.put(
    `${SERVICE_ENGLISH_LANG}/words-top/toggle-words-top-study-list-status/${words_top}`,
  );
};

//Изучать снова, Отметить изученным
export const changeTopReadStatus = async (words_top: number) => {
  return agent.put(
    `${SERVICE_ENGLISH_LANG}/words-top/toggle-is-studied-status/${words_top}`,
  );
};
