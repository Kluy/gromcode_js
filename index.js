// export default arr =>

const sss = arr =>{
    if(!Array.isArray(arr) || arr.length === 0)
    return null;
    
return Math.pow(Math.min(...arr.map(elem => Math.abs(elem))), 2);
}

console.log(sss([-777, 3/2, -2/3, 6, 45, -20]));