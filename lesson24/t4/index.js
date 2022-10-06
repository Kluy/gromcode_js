const formatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
});

// export 
const studentsBirthDays = (students) => 
  students  
    .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
    .reduce((acc, elem) => {
      const month = formatter.format(new Date(elem.birthDate));
      return {
        ...acc,
        [month]: acc[month] ? acc[month].concat(elem.name) : [elem.name]
      }
    }, {})

  console.log(studentsBirthDays(
    [
      {name: 'Tom', birthDate:'01/17/2008'},
      {name: 'Tom4', birthDate:'01/17/2007'},
      {name: 'Tom2', birthDate:'01/29/2000'},
      {name: 'Tom5', birthDate:'01/30/1999'},
      {name: 'Tom3', birthDate:'04/05/2011'},
      {name: 'Tom6', birthDate:'02/19/2009'},
      {name: 'Tom1', birthDate:'02/20/2009'},
    ]
  ));