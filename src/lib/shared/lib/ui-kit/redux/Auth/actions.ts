import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IAuthLoginPayload,
  IUserInfoChildPayload,
  IUserInfoRegisterPayload,
  fetchUserInfoAddChild,
  fetchAuthLogin,
  fetchAuthLogout,
  fetchAuthRefresh,
  fetchCompetitionRegister,
  fetchRegister,
  getCookie,
} from '@slonum/kit';

export const login = createAsyncThunk(
  'fetchAuthLogin',
  async (data: IAuthLoginPayload) => {
    try {
      const res = await fetchAuthLogin(data);
      return res.data;
    } catch (error) {
      throw new Error(error?.response?.data?.message);
    }
  },
);

export const logout = createAsyncThunk('fetchLogout', async (_, {}) => {
  await fetchAuthLogout();
  return true;
});

export function getRefreshToken() {
  //todo
  if (typeof window === 'undefined') return null;

  const tokens = getCookie('_nt');
  if (tokens) return tokens.f;
  else return localStorage.getItem('refreshToken');
}

export const refresh = createAsyncThunk(
  'fetchRefresh',
  async (_, { getState }) => {
    const state = getState() as RootState;

    const refreshToken = getRefreshToken() ?? state.auth?.tokens?.refreshToken;

    if (!refreshToken) {
      throw new Error('Request failed with status code 422');
    }

    const res = await fetchAuthRefresh();
    return res.data;
  },
);

const fetchRegisterObj = {
  fetchCompetitionRegister: fetchCompetitionRegister,
  fetchRegister: fetchRegister,
};

interface IRegisterPayload {
  type: string;
  data: IUserInfoRegisterPayload;
}

export const register = createAsyncThunk(
  'fetchRegister',
  async (data: IUserInfoRegisterPayload) => {
    try {
      const res = await fetchRegister(data);
      return res.data;
    } catch (error) {
      const pattern = 'Error';
      const rs = error?.response?.data;

      if (rs && rs.statusCode === 500) {
        throw new Error(pattern);
      }

      const message = rs?.messages
        ? rs.messages[0].message
        : rs?.message
        ? rs.message
        : Array.isArray(rs)
        ? rs[0].message
        : pattern;

      throw new Error(message);
    }
  },
);

export const registerChild = createAsyncThunk(
  'fetchUserInfoAddChild',
  async (data: IUserInfoChildPayload) => {
    const res = await fetchUserInfoAddChild(data);
    return res.data;
  },
);
