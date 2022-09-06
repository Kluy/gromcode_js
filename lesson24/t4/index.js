export const studentsBirthDays = (students) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const sortedBirthDays = {};
  const sortedStudents = students.sort((a, b) => {
    return a.birthDate.split('/')[1] > b.birthDate.split('/')[1];
  }).map(elem => {
    const month = months[(Number)(elem.birthDate.split('/')[0])];
    if(sortedBirthDays[month] === undefined){
      sortedBirthDays[month] = [];
    }
    sortedBirthDays[month].push(elem.name); 
  });
  return sortedBirthDays;
}