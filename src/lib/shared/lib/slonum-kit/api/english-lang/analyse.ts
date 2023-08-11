import { AxiosResponse } from 'axios';
import { BASE_URL, isServer, agent } from '../common';
import { IText } from '../../types';

const SERVICE_ANALYSE_LANG = `${BASE_URL}${
  isServer ? '' : ':3002'
}/english-lang/analyse`;

export const fetchAnalyseText = (
  text: string,
): Promise<AxiosResponse<IText>> => {
  return agent.post(`${SERVICE_ANALYSE_LANG}/text`, { text });
};

export const fetchAnalyseFile = (file: any): Promise<AxiosResponse<IText>> => {
  const data = new FormData();
  data.append('file', file);

  return agent.post(`${SERVICE_ANALYSE_LANG}/file`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const fetchAnalyseFiles = (
  files: any,
): Promise<AxiosResponse<IText>> => {
  const data = new FormData();
  data.append('file', files);

  return agent.post(`${SERVICE_ANALYSE_LANG}/files`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const fetchAnalyseNamesFile = (
  file: any,
): Promise<AxiosResponse<IText>> => {
  const data = new FormData();
  data.append('file', file);
  return agent.post(`${SERVICE_ANALYSE_LANG}/names-file`, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
