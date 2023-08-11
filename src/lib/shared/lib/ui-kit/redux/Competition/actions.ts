import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ICompetitionAddParticipantPayload,
  IGetParticipantPayload,
  IGetParticipantPayloadAll,
  IRegisterInCompetition,
  fetchCompetitionAddParticipant,
  fetchCompetitionRegister,
  fetchGetCompetition,
  fetchGetParticipantInfo,
  fetchGetParticipantInfoAll,
  fetchUserInfoAddChild,
  getCompetitionId,
} from '@slonum/kit';

export const getCompetition = createAsyncThunk(
  'fetchGetCompetition',
  async () => {
    try {
      const res = await fetchGetCompetition();
      return res.data;
    } catch (error) {
      throw new Error(error?.response?.data?.message);
    }
  },
);

export const getParticipantInfo = createAsyncThunk(
  'fetchGetParticipantInfo',
  async (data: IGetParticipantPayload) => {
    try {
      const res = await fetchGetParticipantInfo(data);
      return res.data;
    } catch (error) {
      throw new Error(error?.response?.data?.message);
    }
  },
);

export const getParticipantInfoAll = createAsyncThunk(
  'fetchGetParticipantInfoAll',
  async (data: IGetParticipantPayloadAll) => {
    try {
      const res = await fetchGetParticipantInfoAll(data);
      return res.data;
    } catch (error) {
      throw new Error(error?.response?.data?.message);
    }
  },
);

export const addParticipant = createAsyncThunk(
  'fetchCompetitionAddParticipant',
  async (data: IRegisterInCompetition) => {
    try {
      const { data: childData } = await fetchUserInfoAddChild({
        childFullName: data.childDto.childFullName,
        birthDate: data.childDto.birthDate,
        city: data.city,
      });

      const id = await getCompetitionId();
      await fetchCompetitionAddParticipant({
        childId: childData.childId,
        competitionId: id,
      });
      const res = await fetchGetParticipantInfo({
        id,
        childId: childData.childId,
      });

      return res.data;
    } catch (error) {
      throw new Error(error?.response?.data?.message);
    }
  },
);

export const registerParentAndChildCompetition = createAsyncThunk(
  'fetchCompetitionRegister',
  async (data: IRegisterInCompetition) => {
    console.log('THUNK');
    const res = await fetchCompetitionRegister(data);
    return res.data;
  },
);
