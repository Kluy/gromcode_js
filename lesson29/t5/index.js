'use strict';

/**
 * @param {string} userId
 * @param {function} callback
 * @return {undefined}
 */

const time = () => (Math.round(Math.random() * 2 + 1)) * 1000;

const func = (user, error) => {
  user === null ? console.log(error) : console.log(user);
}
export const requestUserData = (userId, callback) => {
  // put your code here

  userId === 'broken' ?
    callback(null, new Error('Failed to load user data')) : setTimeout(() => {
    callback({userId, email: `${userId}@example.com`
  })
}, time());  
};

requestUserData(222, func);
requestUserData('broken', func);