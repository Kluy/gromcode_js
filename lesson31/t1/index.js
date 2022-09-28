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
        userId,
        email: `${userId}@example.com`
      }))
    }
  })
  return promise;
};