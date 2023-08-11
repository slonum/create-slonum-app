import { deleteCookie, setCookie } from '@slonum/kit';
import * as I from './interfaces';

export function setTokens(
  state,
  action: I.ISetTokensAction | I.ISetTokensRegister,
  isRegister?: boolean,
) {
  let tokens;

  if (isRegister) {
    tokens = (action as I.ISetTokensRegister).payload.tokens;
  } else {
    tokens = (action as I.ISetTokensAction).payload;
  }

  state.tokens = tokens;
  setCookie('_nt', {
    s: tokens.accessToken,
    f: tokens.refreshToken,
  });
  localStorage.setItem('refreshToken', tokens.refreshToken);
  localStorage.setItem('accessToken', tokens.accessToken);
}

export function removeTokens(state) {
  state.tokens = undefined;
  deleteCookie('_nt');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('UserId');
}
