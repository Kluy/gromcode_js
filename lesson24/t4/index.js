export const studentBirthDays = (students) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const sortedBirthDays = {};
  const sortedStudents = students.map(elem => {
    const birthDateSplit = elem.birthDate.split('/');
    elem.birthDate = new Date(birthDateSplit[2], birthDateSplit[0] - 1, birthDateSplit[1]);
    return elem;
  }).sort((a, b) => {
    return a.birthDate.getDate() > b.birthDate.getDate();
  }).map(elem => {
    const month = months[elem.birthDate.getMonth()];
    if(sortedBirthDays[month] === undefined){
      sortedBirthDays[month] = [];
    }
    sortedBirthDays[month].push(elem.name); 
  });
}