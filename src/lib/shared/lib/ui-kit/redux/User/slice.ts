import { createSlice } from '@reduxjs/toolkit';
import * as I from './interfaces';
import * as A from './actions';

const initialState: I.State = {};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clear: () => {
      return initialState;
    },
    setDataConfirmEmail(state) {
      if (state.data?.emailConfirmed) {
        state.data.emailConfirmed = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      A.getUsersMe.fulfilled,
      (state, action: I.ISetDataAction) => {
        state.data = action.payload;
        state.role = action.payload.roles[0].value;
      },
    );
    builder.addCase(
      A.getUsersInfoMe.fulfilled,
      (state, action: I.ISetProfileAction) => {
        state.profile = action.payload;
      },
    );
    builder.addCase(A.addChild.fulfilled, (state, action) => {
      state.profile = action.payload.user;
    });
  },
});

export const actions = { ...slice.actions, ...A };
export const reducer = slice.reducer;
export const userActions = actions;
