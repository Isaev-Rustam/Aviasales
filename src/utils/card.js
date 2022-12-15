export const padStart = (num) => num.toString().padStart(2, '0');

export const getTime = (date) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  return `${padStart(hours)}:${padStart(minutes)}`;
};

export const getTimeEnd = (date, duration) => new Date(date).getTime() + duration * 1000 * 60;

export const getTravelTime = (timeMinutes) => {
  const hours = (timeMinutes / 60).toFixed();
  const minutes = timeMinutes % 60;
  return `${padStart(hours)}Ч${padStart(minutes)}М`;
};

export const transplants = (length) => {
  const numberOfTransfers = length || '';
  const text = !length ? 'без пересадок' : length === 1 ? 'пересадка' : length === 5 ? 'пересадок' : 'пересадки';
  return `${numberOfTransfers} ${text}`;
};
export const formatPrice = (str) => {
  const nStr = str.toString().split('');
  nStr.splice(2, 0, ' ');
  return nStr.join('');
};
