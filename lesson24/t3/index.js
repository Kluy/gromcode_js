export const getDiff = (startDate, endDate) => {
  const millisecTotal = Math.abs(startDate - endDate);
  const secTotal = Math.trunc(millisecTotal / 1000);
  const sec = secTotal % 60;
  const minsTotal = (secTotal - sec) / 60;
  const mins = minsTotal % 60;
  const hoursTotal = (minsTotal - mins) / 60;
  const hours = hoursTotal % 24;
  const days = (hoursTotal - hours) / 24;
  return `${days}d ${hours}h ${mins}m ${sec}s`;
}