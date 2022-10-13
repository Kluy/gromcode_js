'use strict';

/**
 * @param {string[]} users
 * @return {promise}
 */

// export
const getUsersBlogs = async users => {
  // put your code here
  const result = await Promise.all(users.map(elem => fetch(`https://api.github.com/users/${elem}`)
    .then(response => response.json())
    .then(result => result.blog)));

  return result;
};

// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
