
const baseUrl = 'https://633ecd660dbc3309f3bda154.mockapi.io/api/v1/users';
export function getUserById(userId) {
  // put your code here
  return fetch(`${baseUrl}/${userId}`)
  .then(responce => responce.json());
}

export function createUser(userData) {
  // put your code here
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData),
  })
}



export function deleteUser(userId) {
  // put your code here
   return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  })
  
}

export function updateUser(userId, userData) {
  // put your code here
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData),
  })
}

export function getUsersList() {
  return fetch(baseUrl)
  .then(responce => responce.json());
  // put your code here
}

// examples
// getUsersList().then(users => {
//   console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

// getUserById('3').then(userData => {
//   console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });

// const newUserData = {
//   email: 'cool@email.com',
//   firstName: 'Iron',
//   lastName: 'Man',
//   age: 42,
// };

// createUser(newUserData).then(() => {
//   console.log('User created');
// });

// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

// updateUser('1', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('5').then(() => {
//   console.log('User updated');
// });
