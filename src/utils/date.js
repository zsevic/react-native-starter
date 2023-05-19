const DATETIME_FORMAT = 'en-GB';

export const getTime = minutes => {
  const seconds = 60 * minutes;

  return [seconds, minutes];
};

export const createDate = date =>
  new Intl.DateTimeFormat(DATETIME_FORMAT, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

export const createLastUpdateDate = () =>
  new Intl.DateTimeFormat(DATETIME_FORMAT, {
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date());

export const getDate = seconds => {
  const date = new Date();
  const updatedDate = new Date();
  updatedDate.setTime(date.getTime() - seconds * 1000);

  return updatedDate;
};
