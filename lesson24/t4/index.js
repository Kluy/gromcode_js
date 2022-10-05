export const studentsBirthDays = (students) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const sortedBirthDays = {};
  const sortedStudents = students.map(elem => {
      const [month, day, year] = elem.birthDate.split('/');
      elem.birthDate = new Date(year, month - 1, day);
      return elem;
    }).sort((a, b) => {
      return b.birthDate > a.birthDate;
    }).map(elem => {
      const month = months[elem.birthDate.getMonth()];
      if(sortedBirthDays[month] === undefined){
        sortedBirthDays[month] = [];
      }
      console.log(month);
      sortedBirthDays[month].push(elem.name); 
    });

    return sortedBirthDays;
  }
  
  // console.log(studentsBirthDays(
  //   [
  //     {name: 'Tom5', birthDate:'01/17/2009'},
  //     {name: 'Tom', birthDate:'01/17/2008'},
  //     {name: 'Tom4', birthDate:'01/17/2007'},
  //     {name: 'Tom2', birthDate:'01/29/2000'},
  //     {name: 'Tom3', birthDate:'04/05/2011'},
  //     {name: 'Tom1', birthDate:'02/18/2009'},
  //     {name: 'Tom6', birthDate:'02/19/2009'},
  //   ]
  // ));