// if (typeof str !== 'string') return null;

const cleanTransactionsList = (arr) => {
  return arr
    .filter((elem) => !String(elem).match(/[?a-z]/))
    .map((elem) => '$'.concat(Number.parseFloat(elem).toFixed(2)));
};

// examples

console.log(
  cleanTransactionsList([
    '  1.9  ',
    '16.4',
    17,
    '1 dollar',
    '1 dollar 2',
    'dollar 2',
    'do 55 llar 2 dddd',
    'do 55 llar 2dddd',
    'sss',
  ])
);
