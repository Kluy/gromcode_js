
export const fetchData = (userId) =>
  fetch(`https://api.github.com/users/${userId}`)
    .then(response => response.json());