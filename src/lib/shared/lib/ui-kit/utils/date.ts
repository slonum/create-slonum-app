export const parseDateToDayMonth = (dateString: string): string => {
  const date = new Date(dateString);
  const parsedDate = date.toLocaleDateString('ru-RU', {
    month: 'long',
    day: 'numeric',
  });

  return parsedDate;
};

export const parseDateToMilliSeconds = (dateString: string): number => {
  const parsedDate = Date.parse(dateString);
  return parsedDate;
};

export const calcTimeStampDistance = (
  startTimeStamp: string,
  endTimeStamp: string,
  options?: {
    timeFormat?: 'minutes' | 'seconds';
  },
): number => {
  const timeFormat = options?.timeFormat || 'minutes';
  const parsedStartTime = parseDateToMilliSeconds(startTimeStamp);
  const parsedEndTime = parseDateToMilliSeconds(endTimeStamp);

  /* eslint-disable indent */
  let resultDistance = parsedEndTime - parsedStartTime;

  switch (timeFormat) {
    case 'minutes':
      return Math.round(resultDistance / (1000 * 60));
    case 'seconds':
      return Math.round(resultDistance / (1000 * 60 * 60));
  }
};
