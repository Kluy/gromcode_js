// const dev3 = {
//   days: 7,
//   userId: 'coder',
//   repoId: 'coder'
// }

const getStartDate = (days) => new Date().setDate(new Date().getDate() - days);

// export
 const getMostActiveDevs = ({days, userId, repoId}) => 
  fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
  .then(response => response.json())
  .then(result => {
    const obj = {};
    result
    .filter(elem => new Date(elem.commit.author.date) > getStartDate(days))
    .map(elem => {
      const authorName = elem.commit.author.name;
      if(obj[authorName] === undefined){
        obj[authorName] = {
          count: 1,
          name : authorName,
          email : elem.commit.author.email
        }
      } else if (obj[authorName].name === authorName){
        obj[authorName].count += 1;
      }
    })
    const devArray = Object.values(obj);
    const maxCommit = Math.max(...devArray.map(elem => elem.count));
    const bestDevelopers = devArray.filter(elem => elem.count === maxCommit);
    return bestDevelopers;
  })

//   console.log(
//   getMostActiveDevs(dev3)

// );