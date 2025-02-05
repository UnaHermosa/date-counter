import { daysCount } from "./variables";

// Формирование массива из дат, отфильтрованного на предмет соответствия датам-исключениям.

const getDatesArray = (start, exception) => {
    const arr = [];
  
    while(arr.length < daysCount) {
      const date = new Date(start).toLocaleDateString();
      if(exception.includes(date)) {
        start.setUTCDate(start.getUTCDate() + 1);
      } else {
        arr.push(date);
        start.setUTCDate(start.getUTCDate() + 1);
      }
    }
  
    return arr;
  };

  export { getDatesArray };