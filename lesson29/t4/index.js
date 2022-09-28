'use strict';

const tom = {
  name: 'tom'
}

const bob = {
  name: 'bob'
}

function funcUser () {
  console.log(`${[...arguments]} ${this.name}`);
}

export const delay = (delay, callback, context, ...args) => {
  setTimeout(() => callback.bind(context)(args), delay);
}

delay(2000, funcUser, bob, 4, 5, 33);