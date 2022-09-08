// export 
// const studentsBirthDays = (students) => {
//   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
//   const sortedBirthDays = {};
//   const sortedStudents = students.map(elem => {
//     const birthDateSplit = elem.birthDate.split('/');
//     elem.birthDate = new Date(birthDateSplit[2], birthDateSplit[0] - 1, birthDateSplit[1]);
//     return elem;
//   }).sort((a, b) => {
//     return a.birthDate.getDate() === b.birthDate.getDate() ? a.birthDate.getYear() > b.birthDate.getYear() : a.birthDate.getDate() > b.birthDate.getDate();
//   }).map(elem => {
//     const month = months[elem.birthDate.getMonth()];
//     if(sortedBirthDays[month] === undefined){
//       sortedBirthDays[month] = [];
//     }
//     sortedBirthDays[month].push(elem.name); 
//   });
//   return sortedBirthDays;
// }

export const studentsBirthDays = (students) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const sortedBirthDays = {};
  const sortedStudents = students.map(elem => {
    const birthDateSplit = elem.birthDate.split('/');
    elem.birthDate = new Date(birthDateSplit[2], birthDateSplit[0] - 1, birthDateSplit[1]);
    const month = months[elem.birthDate.getMonth()];
    if(sortedBirthDays[month] === undefined){
      sortedBirthDays[month] = [];
    }
    sortedBirthDays[month].push(elem); 
  });
  
const bb = {};

  for(let key in sortedBirthDays){
    bb[key] = [];
    sortedBirthDays[key].sort((a,b) => a.birthDate.getDate() > b.birthDate.getDate()).map(elem => {
      bb[key].push(elem.name);
    });
  }
  return bb;
}

// console.log(studentsBirthDays(
//     [
//       {name: 'Tom', birthDate:'01/17/2008'},
//       {name: 'Tom1', birthDate:'02/18/2009'},
//       {name: 'Tom2', birthDate:'01/09/2010'},
//       {name: 'Tom3', birthDate:'04/05/2011'}
//     ]
//   ));