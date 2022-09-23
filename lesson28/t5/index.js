const getMethodsNames = {
    years: 'getFullYear',
    months: 'getMonth',
    days: 'getDate',
    hours: 'getHours',
    minutes: 'getMinutes',
    seconds: 'getSeconds',
    milliseconds: 'getMilliseconds',
  };
  
  const setMethodsNames = {
    years: 'setFullYear',
    months: 'setMonth',
    days: 'setDate',
    hours: 'setHours',
    minutes: 'setMinutes',
    seconds: 'setSeconds',
    milliseconds: 'setMilliseconds',
  };

 export const shmoment = intiValue => {
    let result = intiValue;
    const calculator = {
      add(unit, value){
        if(unit === 'years'){
           const newValue = result[getMethodsNames[unit]]() + value;
           result[setMethodsNames[unit]](newValue);
        }
        return this;
      },
      subtract(unit, value){
        return this.add(unit, -value);
      },
      result(){
        return new Date(result);
      }
    };
    return calculator;
  }