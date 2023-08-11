import { OLYMPIAD_URL, agent } from '../common';
import {
  IParticipantInfo,
  IParticipantInfoMini,
  IUpdateParticipantInfoRequest,
} from '../../types';

// Получить информацию об участнике олимпиады
const fetchParticipantInfo = async (data: IParticipantInfoMini) => {
  const res = await agent.get<IParticipantInfo>(
    `${OLYMPIAD_URL}/participant/info`,
    {
      params: {
        userId: data.userId,
        exerciseGroupId: data.exerciseGroupId,
      },
    },
  );

  return res;
};

// Обновить данные об участнике олимпиады
const fetchUpdateParticipantInfo = async (
  data: IUpdateParticipantInfoRequest,
) => {
  const res = await agent.put<IParticipantInfo>(
    `${OLYMPIAD_URL}/register/update-participant-info`,
    data,
  );

  return res;
};

export const participantInfoAPI = {
  getParticipantInfo: fetchParticipantInfo,
  updateParticipantInfo: fetchUpdateParticipantInfo,
};
