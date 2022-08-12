'use strict';

// самодельный bind

function bind(func, context, ...args) {
  return (...args2) => func.call(context, ...args, ...args2);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

function sayHi(age, money){
    console.log(`${this.name} ${age} ${money}`)
  }

const f = bind(addArguments,null, 1);
const f2 = bind(addArguments,null, 3);
console.log(f2(10));