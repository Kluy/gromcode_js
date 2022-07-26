const getCustomersList = obj => {
  // put your code here

  return Object.entries(obj)
    .map((elem) => ({ ...elem[1], id: elem[0] }))
    .sort((a, b) => a.age - b.age);
};

const customers ={
  'customer-id-1':{
    name:'a',
    age: 54,
  },
  'customer-id-2':{
    name:'b',
    age:17,
  },
}

console.log(getCustomersList(customers));
