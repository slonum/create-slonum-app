export type IResponse<P, E = unknown> = IResponseSuccess<P> | IResponseError<E>;

export interface IResponseError<E = unknown> {
  code: IResponseCodes;
  error?: string;
  messages?: IResponseErrors;
  message?: string;
  payload?: E;
}

export type IResponseSuccess<P> = {
  code: IResponseCodes;
  payload: P;
  messages?: IResponseMessages;
};

export enum IResponseCodes {
  // 200
  SUCCESS = '200:SUCCESS',
  // 400
  INVALID_FORMAT = '400:INVALID_FORMAT',
  REQUIRED = '400:REQUIRED',
  // 401
  AUTH = '401:NOT_AUTHORIZED',
  TOKEN_EXPIRED = '401:TOKEN_EXPIRED',
  INVALID_TOKEN = '401:INVALID_TOKEN',
  // 403
  BLOCKED = '403:RESOURCE_IS_BLOCKED',
  DENIED = '403:FORBIDDEN',
  // 404
  NOT_FOUND = '404:NOT_FOUND',
  // 406
  FAILED_FIELDS = '406:FAILED_FIELDS',
  // 409
  WAS_MINTED = '409:WAS_MINTED',
  // 500
  SERVER_ERROR = '500:SERVER_ERROR',
  // и другие...
}

export enum IResponseMessageType {
  ERROR = 'error',
  INFO = 'info',
}

export interface IResponseMessage {
  type?: IResponseMessageType;
  message: string;
}

export interface Error extends IResponseMessage {
  field?: string;
}

export type IResponseMessages = Array<IResponseMessage>;
export type IResponseErrors = Array<Error>;
