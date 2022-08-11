const reverseString = (str) => {
  // put your code here
  if (typeof str !== 'string') return null;

  return str.split('').reverse().join('');
};

// examples

console.log(
  reverseString('a b c d e f g h i j k l m n o p q r s t u v w x y z ')
);
console.log(reverseString('1 + 2'));
console.log(reverseString('1 - 2'));
console.log(reverseString('1 * 2'));
console.log(reverseString('1 / 2'));
