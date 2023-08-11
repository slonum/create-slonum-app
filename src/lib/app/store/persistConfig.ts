import { authSlice } from '@ui/redux/Auth/slice';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: [authSlice.name, 'user'],
  blacklist: [],
};
