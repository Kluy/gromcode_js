export const getGreenwichTime = (date) => {
  const UTCHours = date.getUTCHours(); 
  const zero = UTCHours < 10 ? 0 : '';
  return  `${zero}${UTCHours}:${date.getUTCMinutes()}`; 
}