const defer = (func, ms) => {

  return function(){
    setTimeout(() => func.apply(this, arguments), ms);
  }
}

const f = () => {
  console.log(12);
}


const arr = defer(f,1000);

arr();