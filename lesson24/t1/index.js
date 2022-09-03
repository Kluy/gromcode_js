const dayOfWeek = (date, days) => {
  const dayTitles = ['Su','Mo','Tu','We','Th','Fr','St'];
  const dayCurrent = new Date(date).getDate();
  const newDate = new Date(date).setDate(dayCurrent + days);
  return dayTitles[new Date(newDate).getDay()];
}