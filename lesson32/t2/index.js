const server = [
  'https://server.com/eu',
  'https://server.com/us',
  'https://server.com/au',
]

export const getUserASAP = (userId) => {
  return Promise.race(server.map(elem => new Promise(resolve => setTimeout(() => resolve({
    userData: {
      name: 'Tom',
      age: 17,
    },
    source: `${elem}/${userId}`
  }), Math.random() * 1000))));
}

getUserASAP('Tom24').then(result => console.log(result));