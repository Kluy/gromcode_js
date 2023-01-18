 export const getUserData = (userName) => 
   fetch(`https://api.github.com/users/${userName}`).then(responce => responce.json());