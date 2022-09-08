export const studentsBirthDays = (students) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const sortedBirthDays = {};
  const sortedStudents = students.map(elem => {
      const birthDateParts = elem.birthDate.split('/');
      elem.birthDate = new Date(birthDateParts[2], birthDateParts[0] - 1, birthDateParts[1]);
      return elem;
    }).sort((a, b) => {
      return a.birthDate < b.birthDate;
    }).map(elem => {
      const month = months[elem.birthDate.getMonth()];
      if(sortedBirthDays[month] === undefined){
        sortedBirthDays[month] = [];
      }
      sortedBirthDays[month].push(elem.name); 
    });
    return sortedBirthDays;
  }