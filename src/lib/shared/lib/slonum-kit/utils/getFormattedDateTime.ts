export const formattedDateTime = (datetime: string) => {
  const date = new Date(datetime)
    .toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      second: 'numeric',
      minute: 'numeric',
      hour: 'numeric',
      hour12: false,
    })
    .split(', ')
    .join(' ');
  return date;
};
