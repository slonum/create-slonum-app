import { AxiosResponse } from 'axios';
import { BASE_URL, isServer, agent } from '../common';
import { ISeoData } from '../../types';
const SEO = `${BASE_URL}${isServer ? '' : ':3014'}/seo`;

export const getMetaDataList = async (): Promise<AxiosResponse> => {
  return agent.get(`${SEO}`);
};

export const addMetaData = async (data: ISeoData): Promise<AxiosResponse> => {
  return agent.post(`${SEO}`, data);
};

export const editMetaData = async (data: ISeoData): Promise<AxiosResponse> => {
  return agent.put(`${SEO}`, data);
};

export const deleteMetaData = async (id: number): Promise<AxiosResponse> => {
  return agent.delete(`${SEO}/${id}`);
};
