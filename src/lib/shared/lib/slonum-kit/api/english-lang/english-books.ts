import { AxiosResponse } from 'axios';
import { BASE_URL, isServer, agent } from '../common';
import { IEnglishBook, IEnglishBookWithWordList } from '../../types';

export const SERVICE_ENGLISH_BOOK = `${BASE_URL}${
  isServer ? '' : ':3002'
}/english-lang/book`;

export const addEnglishBook = (
  data: FormData,
): Promise<AxiosResponse<IEnglishBook>> => {
  return agent.post(`${SERVICE_ENGLISH_BOOK}/admin/add-book/`, data);
};

export const editEnglishBook = (
  data: IEnglishBook,
): Promise<AxiosResponse<IEnglishBook>> => {
  return agent.put(`${SERVICE_ENGLISH_BOOK}/admin/edit-book/${data.id}`, data);
};

export const deleteEnglishBook = (
  id: number,
): Promise<AxiosResponse<IEnglishBook>> => {
  return agent.delete(`${SERVICE_ENGLISH_BOOK}/admin/delete-book/${id}`);
};

export const fetchEnglishBookById = async (
  id: number,
  hide?: boolean,
  hidePreposition?: boolean,
): Promise<IEnglishBookWithWordList> => {
  return await agent
    .get(
      `${SERVICE_ENGLISH_BOOK}/get-book-with-word-list/${id}${
        hide ? '?hide=studied&' : '?'
      }${hidePreposition ? 'hidePreposition=true' : ''}`,
    )
    .then((res) => res.data);
};

export const fetchEnglishBookBySlug = async (
  slug: string,
  page?: number,
  limit = 100,
  hide?: boolean,
  hidePreposition?: boolean,
  cookie?: string | number | boolean,
): Promise<IEnglishBookWithWordList> => {
  const options = {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  };
  return await agent
    .get(
      `${SERVICE_ENGLISH_BOOK}/get-book-with-word-list-slug/${slug}?limit=${limit}${
        page ? '&page=' + page : ''
      }${hide ? '&hide=studied' : ''}${
        hidePreposition ? '&hidePreposition=true' : ''
      }`,
      cookie ? options : undefined,
    )
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
    });
};

export const fetchEnglishBooks = async (): Promise<IEnglishBook[]> => {
  return await agent
    .get(`${SERVICE_ENGLISH_BOOK}/get-all-books/`)
    .then((res) => res.data);
};
