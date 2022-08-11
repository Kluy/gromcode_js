export default arr =>{
    if(!Array.isArray(arr) || arr.length === 0)
    return null;
    
return Math.pow(Math.min(...arr.map(elem => Math.abs(elem))), 2);
}
