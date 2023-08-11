import { IExercise } from '../types';

export const transformExercise = (exercise: IExercise) => {
  const userAnswerValue = exercise.participantAnswer
    ? exercise.answerTypeEnum === 'input'
      ? exercise.participantAnswer?.value
      : exercise.answerVariants.find(
          (variant) =>
            variant.id === exercise.participantAnswer?.answerVariantsIds[0],
        )?.text
    : undefined;

  const userAnswerId = exercise.participantAnswer?.id;

  const resultScore =
    exercise.answerTypeEnum === 'choice'
      ? exercise.answerVariants.find((variant) => variant.score)?.score
      : exercise?.score;

  const correctAnswer =
    exercise.answerTypeEnum === 'input'
      ? exercise?.correctAnswer
      : exercise.answerVariants.find((variant) => variant?.score)?.text;

  return {
    ...exercise,
    userAnswer: userAnswerValue,
    answerId: userAnswerId,
    score: resultScore,
    correctAnswer,
  };
};
