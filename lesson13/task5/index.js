export function reverseArray(arr) {
    if (!Array.isArray(arr)) return null;
    return arr.slice().reverse();
  }




export const withdraw = (clients, balances, client, amount) => {
    const clientIndex = clients.indexOf(client);
    
    if(balances[clientIndex] < amount)
    return -1;

    balances[clientIndex] -= amount;

    return balances[clientIndex];
}


//input
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)

//output
//37
//и массив balances должен быть [1400, 37, -6]



//example 2:

//input
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)

//output
//-1
//и массив balances должен быть [1400, 87, -6]

/* eslint-disable no-restricted-syntax */

export const getAdults = (obj) => {
  
    const resultObj = {};

    for (const key in obj) {
      if (obj[key] >= 18) resultObj[key] = obj[key];
    }

    return resultObj;
  };
  
  // examples
//   getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
//   getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
  
//   console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
//   console.log(getAdults({ Ann: 56, Andrey: 7 }));
  