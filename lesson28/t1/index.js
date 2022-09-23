export const calc = intiValue => {
  let result = intiValue;
  const calculator = {
    add(number){
      result += number;
      return this;
    },
    subtract(number){
      result -= number;
      return this;
    },
    mult(number){
      result *= number;
      return this;
    },
    div(number){
      result /= number;
      return this;
    },
    result(){
      return result;
    }
  };
  return calculator;
}