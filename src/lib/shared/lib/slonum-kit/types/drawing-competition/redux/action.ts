import { IResponseError, IResponseErrors } from './response';

export interface IMetaData {
  promiseActions: {
    resolve: (data?: unknown) => void;
    reject: (errors?: IResponseErrors | IResponseError) => void;
  };
  request?: {
    id: string;
    onProgress?: (process: number) => void;
    controller?: AbortController;
  };
}

export interface IAction<P> {
  type: string;
  payload: P;
  meta?: IMetaData;
}
