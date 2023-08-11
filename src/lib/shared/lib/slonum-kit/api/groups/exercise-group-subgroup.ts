import {
  IExerciseGroup,
  IExerciseGroupFilters,
  IExerciseMeta,
  IExerciseSubGroup,
  IExerciseSubGroupMini,
} from '../../types';
import { OLYMPIAD_URL, agent } from '../common';

// Получить группу
const fetchExerciseGroup = async (exerciseGroupId: number) => {
  const res = await agent.get<IExerciseGroup>(
    `${OLYMPIAD_URL}/exercise-group/${exerciseGroupId}`,
  );
  return res;
};

const fetchExerciseSubGroup = async (exerciseSubGroupId: number) => {
  const res = await agent.get<IExerciseSubGroup>(
    `${OLYMPIAD_URL}/exercise-sub-group/${exerciseSubGroupId}`,
  );

  return res;
};

const fetchExerciseSubGroupList = async (exerciseGroupId: number) => {
  const res = await agent.get<{ data: IExerciseSubGroupMini[] }>(
    `${OLYMPIAD_URL}/exercise-sub-group/get-all-with-pagination-and-filtering`,
    {
      params: {
        exerciseGroupId,
        orderField: 'title',
      },
    },
  );

  return res;
};

const fetchExerciseGroupList = async (params?: IExerciseGroupFilters) => {
  const res = await agent.get<{ data: IExerciseGroup[]; meta: IExerciseMeta }>(
    `${OLYMPIAD_URL}/exercise-group/get-all-with-pagination-and-filtering`,
    { params },
  );

  return res;
};

export const exerciseGroupAPI = {
  getExerciseGroup: fetchExerciseGroup,
  getExerciseSubGroupList: fetchExerciseSubGroupList,
  getExerciseSubGroup: fetchExerciseSubGroup,
  getExerciseGroupList: fetchExerciseGroupList,
};
