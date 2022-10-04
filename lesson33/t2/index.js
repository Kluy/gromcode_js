const getStartDate = (days) => new Date().setDate(new Date().getDate() - days);

export const getMostActiveDevs = ({days, userId, repoId}) => 
  fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
    .then(response => response.json())
    .then(result => result.filter(elem => new Date(elem.commit.committer.date) > getStartDate(days)))
    .then(result => {
      const user = {}

      if(result.length > 0) {
        user.count = result.length;
        user.name = `${result[0].commit.author.name}`;
        user.email = `${result[0].commit.author.email}`;
      }

      return user;
});

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


Promise.all([getMostActiveDevs(developer),getMostActiveDevs(developer2),getMostActiveDevs(developer3)])
.then(result => result.sort((a, b) => b.count - a.count).filter(elem => elem.count === result[0].count));