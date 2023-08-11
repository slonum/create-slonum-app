import axios from 'axios';
import { BASE_URL, DICTIONARY_WORDS, isServer } from './agent';

export const SERVICE_FILES = `${BASE_URL}${
  isServer ? '' : ':3006'
}/service-files`;

//Получение ID загруженной картинки
export async function fetchImageOnServer(file: any): Promise<any> {
  const formData = new FormData();
  formData.append('file', file);
  return await axios({
    method: 'post',
    url: `${SERVICE_FILES}/`,
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then((response: any) => response.data.id);
}
export const getPdf = async (url: string, module = 'words') => {
  const urls: Record<string, string> = {
    words: DICTIONARY_WORDS,
  };
  return await axios({
    method: 'post',
    url: `${SERVICE_FILES}/pdf`,
    data: {
      url: `${urls[module]}${url}`,
    },
    responseType: 'arraybuffer',
    headers: {
      Accept: 'application/pdf',
    },
  });
};
