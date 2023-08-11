import { createContext } from 'react';

export const trainContextState = {
  childId: -1,
  grade: 1,
};
export const TrainingContext = createContext(trainContextState);
