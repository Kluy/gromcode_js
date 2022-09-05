// export
 const studentBirthDays = (students) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  const dates = {};
  const std = students.map(elem => {
    const birthDateSplit = elem.birthDate.split('/');
    const date = new Date(birthDateSplit[2], birthDateSplit[0] - 1, birthDateSplit[1]);
    const month = months[date.getMonth()];
    dates[month] = [];
    dates[month].push(elem.name);
    console.log(date);
    console.log(month);
    console.log(dates);
  })

  // return `${days}d ${hours}h ${mins}m ${sec}s`;
}


studentBirthDays([
  {name: 'Tom', birthDate: '01/15/2010'},
  {name: 'Ben', birthDate: '01/17/2008'},
  {name: 'Sam', birthDate: '03/15/2010'},
]);