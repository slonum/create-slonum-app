import { PayloadAction } from '@reduxjs/toolkit';
import { IAuthTokens } from '@slonum/kit';

export interface State {
  tokens?: IAuthTokens;
}

export type ISetTokensAction = PayloadAction<IAuthTokens>;
export type ISetTokensRegister = PayloadAction<State>;
