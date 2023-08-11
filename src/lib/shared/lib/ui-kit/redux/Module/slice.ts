import { createSlice } from '@reduxjs/toolkit';
import { ISetModuleAction } from '@ui/redux/Module/interfaces';
import * as I from './interfaces';

const initialState: I.IModuleState = {
  module: '',
};

const slice = createSlice({
  name: 'module',
  initialState,
  reducers: {
    setModule(state, action: ISetModuleAction) {
      state.module = action.payload.module;
    },
  },
});

export const moduleActions = slice.actions;
export const moduleReducer = slice.reducer;
