export const getDiff = (startDate, endDate) => {
  const millisecTotal = Math.abs(startDate - endDate);
  const days = Math.trunc(millisecTotal / 86400000);
  const hours = Math.abs(startDate.getHours() - endDate.getHours());
  const mins = Math.abs(startDate.getMinutes() - endDate.getMinutes());
  const sec = Math.abs(startDate.getSeconds() - endDate.getSeconds());
  return `${days}d ${hours}h ${mins}m ${sec}s`;
}