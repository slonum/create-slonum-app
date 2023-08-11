import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { createWrapper } from 'next-redux-wrapper';
import { persistStore } from 'redux-persist';
import { agent } from '@slonum/kit';
import { setupInterceptors } from '@ui/api';
import { authActions } from '@ui/redux/Auth/slice';
import { listenerMiddleware } from './listenerMiddleware';

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: false,
      }).prepend(listenerMiddleware.middleware),
  });
}

const store = makeStore();

setupInterceptors(store, agent, authActions.refresh);

declare global {
  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;
  type AppThunkAction = ThunkAction<void, RootState, unknown, AnyAction>;
}

export const wrapper = createWrapper<typeof store>(() => store);

export const persistor = persistStore(store);

export default store;
