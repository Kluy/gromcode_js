'use strict';

/**
 * @param {string} userId
 * @param {function} callback
 * @return {undefined}
 */

const time = () => (Math.round(Math.random() * 2 + 1)) * 1000;

const f = (user) => {
console.log(user);
}
// export
const requestUserData = (userId, callback) => {
  // put your code here
  
  const user = {
    userId,
    email: `${userId}@example.com`
  }
  
  
  setTimeout(() => {
    userId === 'broken' ? callback(null, 'Faild to load user data') : callback(user) 
  }, time());
  
};



requestUserData(222, f);
requestUserData('broken', f);

