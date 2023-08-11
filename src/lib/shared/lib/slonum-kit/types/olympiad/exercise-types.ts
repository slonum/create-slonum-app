export type IOlympStatus =
  | 'CHOICE_SUBGROUP'
  | 'PAYMENT'
  | 'PAYMENT_IN_PROGRESS'
  | 'CHECKED_INFO'
  | 'COMPLETE'
  | 'IN_PROGRESS'
  | 'FINISHED';

export interface IRegisterExistChildRequest {
  childId: number;
  olympiadId: number;
  olympiadLink: string;
}

export interface IParticipantInfoMini {
  userId: number;
  exerciseGroupId: number;
}

export interface IParticipantInfoMedium extends IParticipantInfoMini {
  exerciseSubGroupId?: number;
}

export interface IParticipantInfo extends IParticipantInfoMedium {
  status?: IOlympStatus;
  startedTimeStamp?: string;
  endTimeStamp?: string;
  finishedTimeStamp?: string;
}

export interface ISelectSubGroupRequest {
  userId: number;
  exerciseGroupId: number;
  exerciseSubGroupId: number;
}

export interface IUpdateParticipantInfoRequest {
  childId: number;
  exerciseGroupId: number;
  olympiadLink: string;
  profileDto?: {
    fullName?: string;
    city?: string;
    birthDate?: string;
    avatarUrl?: string;
  };
  authDto?: {
    login?: string;
    oldPassword?: string;
    newPassword?: string;
    passwordConfirm?: string;
    email?: string;
  };
}

export interface IAnswerVariant {
  id?: number;
  order: number;
  text: string;
  score?: number;
}

export interface IExerciseGroup {
  id?: string;
  title?: string;
  state?: string;
  status?: string;
  startTimestamp?: string;
  endTimestamp?: string;
  description?: string;
  avatar?: string;
  price?: number;
  type?: string;
}

export interface IExercise {
  id?: string;
  exerciseText: string;
  exerciseQuestion?: string;
  answerTypeEnum: 'choice' | 'input';
  answerDataTypeEnum: 'STRING' | 'NUMBER' | 'IMAGE';
  remark?: string;
  image?: string;
  taskNumber: number;
  answerVariants?: IAnswerVariant[];
  exerciseGroupId: string;
  score?: number;
  correctAnswer?: string;
  participantAnswer: {
    id: number;
    value?: string;
    answerVariantsIds?: number[];
  };
}

export interface IExerciseSubGroupMini {
  id?: number;
  title: string;
  duration: number;
}

export interface IExerciseSubGroup extends IExerciseSubGroupMini {
  exercises: IExercise[];
}

export interface IExerciseWithAnswers extends IExercise {
  correctAnswer?: string;
}
export interface IExerciseWithUserAnswers extends IExerciseWithAnswers {
  userAnswer?: string;
  answerId?: number;
  isChecked?: boolean;
  userScore?: number;
}

export interface IExerciseSubGroupWithUserAnswers
  extends Omit<IExerciseSubGroup, 'exercises'> {
  exercises: IExerciseWithUserAnswers[];
}

export interface IExerciseSubGroupWithAnswers
  extends Omit<IExerciseSubGroup, 'exercises'> {
  exercises: IExerciseWithAnswers[];
}

export interface ICreateUserAnswerRequest {
  userId: number;
  exerciseId: number;
  exerciseGroupId: number;
  value?: string;
  answerVariants?: number[];
}

export interface IUpdateUserAnswerRequest extends ICreateUserAnswerRequest {
  answerId?: number;
}

export interface IUpdateUserAnswerResponse {
  exercise: IExercise;
  // Это id ответа
  id?: number;
  value?: string;
  answerVariants: IAnswerVariant[];
}

export interface IOlympResultsResponse {
  generalTotalScore: number;
  participantScore: number;
  correctAnswerCount: number;
  incorrectAnswerCount: number;
}

export interface IUserAnswerFinished {
  id?: string;
  participantId: string;
  value?: string;
  createdAt: string;
  updatedAt: string;
  exerciseId: string;
  exercise: IExercise;
  exerciseGroupId: string;
  answerVariants: IAnswerVariant[];
  score: number;
}

export interface IExerciseGroupFilters {
  order?: 'ASC' | 'DESC';
  page?: number;
  take?: number;
  orderField?: 'id' | 'title' | 'startTimestamp' | 'endTimestamp' | 'price';
  state?: 'NOT_STARTED' | 'IN_PROGRESS' | 'FINISHED';
  status?: 'ACTIVE' | 'HIDDEN' | 'REMOVED';
  type?: 'OLYMPIAD' | 'QUIZ';
}

export interface IExerciseMeta {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
