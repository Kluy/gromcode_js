// export default arr =>

const sss = arr => Math.pow(Math.min(...arr.map(elem => Math.abs(elem))), 2);


   
console.log(sss([-777, 3, -2, 6, 45, -20]));