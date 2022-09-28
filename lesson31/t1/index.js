'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId => {
  // put your code here
  const promise = new Promise((resolve, reject) => {
    if(userId === 'broken'){
      setTimeout(() => reject(new Error('User not found')), 500);
    } else {
      setTimeout(() => resolve({
        name: 'John',
        age: 17,
        userId,
        email: `${userId}@example.com`
      }), 1000)
    }
  })
  return promise;
};