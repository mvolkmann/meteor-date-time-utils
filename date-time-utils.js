export const name = 'date-time-utils';

export const MS_PER_SECOND = 1000;
export const SECONDS_PER_MINUTE = 60;

export const minutesToMs = minutes =>
  minutes * SECONDS_PER_MINUTE * MS_PER_SECOND;

export function nextHourString() {
  const now = new Date();
  const hours = (now.getHours() + 1).toString().padStart(2, '0');
  return hours + ':00';
}

export function nowDateString() {
  const now = new Date();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const date = now.getDate().toString().padStart(2, '0');
  return now.getFullYear() + '-' + month + '-' + date;
}

export function time24to12(time) {
  let [hours, minutes] = time.split(':');
  hours = parseInt(hours);
  const afterNoon = hours >= 12;
  if (afterNoon && hours > 12) hours -= 12;
  if (hours === 0) hours = 12; // midnight
  const amPm = afterNoon ? 'PM' : 'AM';
  return `${hours}:${minutes} ${amPm}`;
}

export function timeStringFromMs(ms) {
  const seconds = Math.round(ms / MS_PER_SECOND);
  const minutes = Math.floor(seconds / SECONDS_PER_MINUTE);
  return (
    minutes + ':' + (seconds % SECONDS_PER_MINUTE).toString().padStart(2, '0')
  );
}
