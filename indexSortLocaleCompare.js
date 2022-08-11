'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const sortContacts = (arr, asc = true) => {
  // put your code here
  if (!Array.isArray(arr)) return null;

  return arr.sort((a, b) =>
    asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );
};

// examples

const arr = [
  {
    name: 'Tom',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Tod',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Bob',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Kel',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Kev',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Don',
    phoneNumber: '777-77-77',
  },
  {
    name: 'John',
    phoneNumber: '777-77-77',
  },
];

console.log(sortContacts(arr, false));
