import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { authActions } from '@ui/redux/Auth/slice';
import { userStore } from '@ui/redux/User';

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(
    authActions.login.fulfilled,
    authActions.refresh.fulfilled,
    authActions.register.fulfilled,
  ),
  effect: async (action, listenerApi) => {
    await listenerApi.delay(100);
    await listenerApi.dispatch(userStore.actions.getUsersMe());
    await listenerApi.dispatch(userStore.actions.getUsersInfoMe());
  },
});

listenerMiddleware.startListening({
  matcher: isAnyOf(
    authActions.login.rejected,
    authActions.logout.fulfilled,
    authActions.logout.rejected,
    authActions.refresh.rejected,
  ),
  effect: async (action, listenerApi) => {
    if (
      action.type === 'fetchRefresh/rejected' &&
      action.error?.message !== 'Request failed with status code 422'
    )
      return;
    listenerApi.dispatch(userStore.actions.clear());
  },
});
