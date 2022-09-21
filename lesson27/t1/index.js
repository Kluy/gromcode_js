export const getLocalStorageData = () => {
    return Object.entries(localStorage)
    .reduce((acc,[key,value]) => {
      return {
        ...acc,
         [key] : value
        };
          }, {})};