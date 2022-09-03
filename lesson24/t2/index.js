export const getGreenwichTime = (date) => {
  const formatter = new Intl.DateTimeFormat('en',{
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
  return formatter.format(date); 
}