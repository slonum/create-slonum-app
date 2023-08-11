import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import * as I from './interfaces';
import * as A from './actions';
import { removeTokens, setTokens } from './utils';
import { notify } from '@ui/blocks/notification';
import { modal } from '@ui/blocks/modal';

const initialState: I.State = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clear: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(A.register.fulfilled, (state, action) => {
      setTokens(state, action, true);
    });
    builder.addCase(A.refresh.rejected, (state, action) => {
      if (action.error.message !== 'Request failed with status code 422') {
        return;
      }
      removeTokens(state);
    });
    builder.addMatcher(
      isAnyOf(A.login.fulfilled, A.refresh.fulfilled),
      (state, action) => {
        setTokens(state, action);
      },
    );
    builder.addMatcher(
      isAnyOf(
        A.login.fulfilled,
        A.register.fulfilled,
        A.registerChild.fulfilled,
      ),
      () => {
        modal.close();
      },
    );
    builder.addMatcher(
      isAnyOf(A.login.rejected, A.logout.rejected, A.logout.fulfilled),
      (state, action) => {
        if ('error' in action) {
          notify.create({
            type: 'error',
            message: action.error.message,
          });
        }

        removeTokens(state);
      },
    );
    builder.addMatcher(
      isAnyOf(
        A.login.rejected,
        A.register.rejected,
        A.logout.rejected,
        A.registerChild.rejected,
      ),
      (state, action) => {
        if ('error' in action) {
          notify.create({
            type: 'error',
            message: action.error.message,
          });
        }
      },
    );
  },
});
export const authActions = { ...authSlice.actions, ...A };
