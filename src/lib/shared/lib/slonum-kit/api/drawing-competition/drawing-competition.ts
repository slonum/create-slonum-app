import axios, { AxiosResponse } from 'axios';
import { BASE_URL, isServer, agent } from '../common';
import {
  IGetParticipantPayload,
  ICompetitionParticipantInfoResponse,
  IGetParticipantPayloadAll,
  ICompetitionRegisterResponseSuccess,
  IAddRepostLinkPayload,
  IAddDrawingLinkPayload,
  ICheckAndUpdateUserPayload,
  ICheckAndUpdateUserResponseSuccess,
  ICompetition,
  ICompetitionResult,
  ISetParticipanRankPayload,
  IEditCompetition,
  ICompetitionAddParticipantPayload,
  IRegisterInCompetition,
} from '../../types';
const SERVICE_DRAWING = `${BASE_URL}${
  isServer ? '' : ':3007'
}/drawing-competition`;

//получение id конкурса
export async function getCompetitionId() {
  return await axios
    .get(`${SERVICE_DRAWING}/current-contest`)
    .then((response) => response.data.id);
}

export const fetchGetCompetition = () => {
  return agent.get<ICompetition>(`${SERVICE_DRAWING}/current-contest`);
};

//получение данных по юзеру с сервера
export const fetchGetParticipantInfo = async (
  data: IGetParticipantPayload,
): Promise<AxiosResponse<ICompetitionParticipantInfoResponse>> => {
  return agent.get(
    `${SERVICE_DRAWING}/get-participant-info/${data.id}?childId=${data.childId}`,
  );
};

//получение данных по юзеру с сервера
export const fetchGetParticipantInfoAll = async (
  data: IGetParticipantPayloadAll,
): Promise<AxiosResponse<ICompetitionParticipantInfoResponse[]>> => {
  return agent.get(
    `${SERVICE_DRAWING}/get-participant-info-all/childId=${data.childId}`,
  );
};

//отправка запроса на сервер и обновление данных
export const fetchCompetitionAddParticipant = async (
  data: ICompetitionAddParticipantPayload,
): Promise<AxiosResponse<ICompetitionParticipantInfoResponse>> => {
  return agent.post(`${SERVICE_DRAWING}/add-participant`, data);
};

export const fetchCompetitionRegister = async (
  data: IRegisterInCompetition,
): Promise<AxiosResponse<ICompetitionRegisterResponseSuccess>> => {
  const id = await getCompetitionId();
  return agent.post(
    `${SERVICE_DRAWING}/add-participant-and-register/${id}`,
    data,
  );
};

//отправка ссылки на репост
export const fetchAddRepostLink = (
  data: IAddRepostLinkPayload,
): Promise<AxiosResponse<ICompetitionParticipantInfoResponse>> => {
  return agent.post(`${SERVICE_DRAWING}/add-repost-link`, data);
};

//отправка рисунка на сервер
export const fetchAddDrawingLink = (
  data: IAddDrawingLinkPayload,
): Promise<ICompetitionParticipantInfoResponse> => {
  return agent
    .post(`${SERVICE_DRAWING}/add-drawing-link`, data)
    .then((response) => response.data);
};

//проверка данных пользователя и обновление
export const fetchCompetitionCheckUserInfo = async (
  data: ICheckAndUpdateUserPayload,
): Promise<ICheckAndUpdateUserResponseSuccess> => {
  return agent
    .post(`${SERVICE_DRAWING}/check-user-info`, data)
    .then((response) => response.data);
};

export const fetchGetPaymentUrl = async (
  data: IGetParticipantPayload,
  withDiscount: boolean,
): Promise<AxiosResponse<string>> => {
  return agent.get(`${SERVICE_DRAWING}/get-payment-url`, {
    params: { competition_id: data.id, child_id: data.childId, withDiscount },
  });
};

//получение URL для доната
export const fetchGetDonateUrl = async (
  amount: number,
): Promise<AxiosResponse<string>> => {
  return agent.get(`${SERVICE_DRAWING}/donate`, {
    params: { amount },
  });
};

export const fetchGetAllCompetition = async (): Promise<ICompetition[]> => {
  return agent.get(`${SERVICE_DRAWING}/`).then((response) => response.data);
};

export const fetchGetAllPatipicants = async (
  competitionId: number,
): Promise<ICompetitionResult> => {
  return agent
    .get(`${SERVICE_DRAWING}/admin/get-all-participants/${competitionId}`)
    .then((response) => response.data);
};

export const fetchSetPatipicantRank = async (
  data: ISetParticipanRankPayload,
): Promise<ICompetitionParticipantInfoResponse> => {
  return agent
    .post(`${SERVICE_DRAWING}/admin/save-participant-rank`, data)
    .then((response) => response.data);
};

export const createCompetition = async (
  data: IEditCompetition,
): Promise<ICompetition> => {
  return agent.post(`${SERVICE_DRAWING}/`, data);
};

export const editCompetitionData = async (
  data: IEditCompetition,
): Promise<ICompetition> => {
  return agent.put(`${SERVICE_DRAWING}/`, data);
};

export const deleteCompetition = async (id: number): Promise<ICompetition> => {
  return agent.delete(`${SERVICE_DRAWING}/${id}`);
};
