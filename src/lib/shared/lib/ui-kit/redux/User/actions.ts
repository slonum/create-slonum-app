import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchUsersMe,
  fetchUserInfoMe,
  IUserInfoChildPayload,
  fetchUserInfoAddChild,
} from '@slonum/kit';
import { notify } from '@ui/blocks/notification';

export const getUsersMe = createAsyncThunk('fetchUsersMe', async () => {
  const res = await fetchUsersMe();
  return res.data;
});

export const getUsersInfoMe = createAsyncThunk('fetchUserInfoMe', async () => {
  const res = await fetchUserInfoMe();
  return res.data;
});

export const addChild = createAsyncThunk(
  'fetchUserInfoAddChild',
  async (data: IUserInfoChildPayload) => {
    try {
      const child = await fetchUserInfoAddChild(data);
      notify?.create({
        message: 'Регистрация ребенка прошла успешно!',
        type: 'success',
      });
      const res = await fetchUserInfoMe();
      return { user: res.data, childID: child.data.childId };
    } catch (error) {}
  },
);
