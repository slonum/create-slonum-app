import { IParticipantInfo, IRegisterExistChildRequest } from '../../types';
import { OLYMPIAD_URL, agent } from '../common';

// Регистрация уже существующего ребёнка на олимпиаду
const fetchRegisterExistChild = async (data: IRegisterExistChildRequest) => {
  const res = await agent.post<IParticipantInfo>(
    `${OLYMPIAD_URL}/register`,
    data,
  );
  return res;
};

export const registerAPI = {
  registerExistChild: fetchRegisterExistChild,
};
