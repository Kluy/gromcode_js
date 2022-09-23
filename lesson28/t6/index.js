export const maxFibonacci = number => {
  if(number < 0)
  return;
  let fib = 0;
  let fib2 = 1;
  let fib3 = 0;
  while(fib + fib2 <= number){
    fib3 = fib + fib2;
    fib = fib2;
    fib2 = fib3;
  }
  return fib3;
}