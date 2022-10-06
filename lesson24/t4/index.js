const formatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
});
export const studentsBirthDays = (students) => {
  const sortedBirthDays = {};
  const sortedStudents = students
  .map(elem => {
      elem.birthDate = new Date(elem.birthDate);
      return elem;
    })
    .sort((a, b) => a.birthDate.getDate() - b.birthDate.getDate())
    .map(elem => {
      const month = formatter.format(elem.birthDate);
      if(sortedBirthDays[month] === undefined){
        sortedBirthDays[month] = [];
      }
      sortedBirthDays[month].push(elem.name); 
    });

    return sortedBirthDays;
  }

// export 
// const studentsBirthDays = students => {
//   const bdayObj = students.reduce((acc, student) => {
//     const month = formatter.format(new Date(student.birthDate));
//     console.log(month);

//     return {
//       ...acc,
//       [month]: acc[month] ? acc[month].concat(student) : [student],
//     };
//   }, {});

//   return Object.entries(bdayObj).reduce(
//     (acc, [month, studentsList]) => ({
//       ...acc,
//       [month]: studentsList
//       .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
//       .map(({name}) => name),
//     }),
//     {},
//   );
// }

  
  // console.log(studentsBirthDays(
  //   [
  //     {name: 'Tom', birthDate:'01/17/2008'},
  //     {name: 'Tom4', birthDate:'01/17/2007'},
  //     {name: 'Tom2', birthDate:'01/29/2000'},
  //     {name: 'Tom5', birthDate:'01/30/1999'},
  //     {name: 'Tom3', birthDate:'04/05/2011'},
  //     {name: 'Tom6', birthDate:'02/19/2009'},
  //     {name: 'Tom1', birthDate:'02/20/2009'},
  //   ]
  // ));