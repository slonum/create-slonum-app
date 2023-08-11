import { PayloadAction } from '@reduxjs/toolkit';
import { IRegistrationSource } from '@ui/types';

export interface IModuleState {
  module: IRegistrationSource;
}

export type ISetModuleAction = PayloadAction<IModuleState>;
