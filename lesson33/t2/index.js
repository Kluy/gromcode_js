
export const getMostActiveDevs = ({days, userId, repoId}) =>  {
  const getStartDate = (days) => new Date().setDate(new Date().getDate() - days);

 const pr = fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
  .then(response => response.json())
  .then(result => {
    const resultArr = result.filter(elem => new Date(elem.commit.committer.date) > getStartDate(days));
    const user = {}
    
    if(resultArr.length > 0) {
      user.count = resultArr.length;
      user.name = `${resultArr[0].commit.author.name}`;
      user.email = `${resultArr[0].commit.author.email}`;
    }
    
    return user;
  })
  return pr;
}
  
const developer = {
  days: 7,
  userId: 'Kluy',
  repoId: 'gromcode_js'
}

const developer2 = {
  days: 7,
  userId: 'alvarobartt',
  repoId: 'investiny'
}

const developer3 = {
  days: 7,
  userId: 'coder',
  repoId: 'coder'
}
// getMostActiveDevs(developer);
// getMostActiveDevs(developer2);
// getMostActiveDevs(developer3);

Promise.all([getMostActiveDevs(developer),getMostActiveDevs(developer2),getMostActiveDevs(developer3)])
.then(result => result.sort((a, b) => b.count - a.count).filter(elem => elem.count === result[0].count));