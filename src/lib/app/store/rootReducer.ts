import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { userStore } from '@ui/redux/User';
import { authSlice } from '@ui/redux/Auth/slice';
import { moduleReducer } from '@ui/redux/Module/slice';
import { competitionSlice } from '@ui/redux/Competition';

const appReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [competitionSlice.name]: competitionSlice.reducer,
  user: userStore.reducer,
  module: moduleReducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);
export default persistedReducer;
