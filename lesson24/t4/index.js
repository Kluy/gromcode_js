export const studentsBirthDays = (students) => {
  const sortedBirthDays = {};
  const sortedStudents = students.map(elem => {
      elem.birthDate = new Date(elem.birthDate);
      return elem;
    }).sort((a, b) => {
      return a.birthDate > b.birthDate;
    }).map(elem => {
      const month = elem.birthDate.getMonth();
      if(sortedBirthDays[month] === undefined){
        sortedBirthDays[month] = [];
      }
      sortedBirthDays[month].push(elem.name); 
    });
    return sortedBirthDays;
  }
