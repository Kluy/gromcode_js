'use strict';

export const fetchUser = async userId => {
  // put your code here
  try{
      const response = await fetch(`https://api.github.com/users/${userId}`);      
      return response.ok ? await response.json() : null;
    } catch (e){
        throw new Error('Failed to get user data');
    }
};