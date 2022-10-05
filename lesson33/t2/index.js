const getStartDate = (days) => new Date().setDate(new Date().getDate() - days);

export const getMostActiveDevs = (days, userId, repoId) => 
  fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
  .then(response => response.json())
  .then(result => {
    const resultArr = result.filter(elem => new Date(elem.commit.author.date) > getStartDate(days));
    const user = {}
    
    if(resultArr.length > 0) {
      user.count = resultArr.length;
      user.name = `${resultArr[0].commit.author.name}`;
      user.email = `${resultArr[0].commit.author.email}`;
    }
    
    return user;
  })