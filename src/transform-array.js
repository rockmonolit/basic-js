const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
   let dsNext = `--discard-next`;
   let dsPrev = `--discard-prev`;
   let dbNext = `--double-next`;
   let dbPrev = `--double-prev`;
   let res = [];

   if (!(arr instanceof Array)) {
     throw new Error(`'arr' parameter must be an instance of the Array!`);
   }

   for (let i = 0; i < arr.length; i++) {
     const v = arr[i];
     if (v === dsNext) {
       console.log(i++); // It's Alive!!!
       i++;
     } else if (v === dbNext) {
       if (arr[i + 1]) {
         res.push(arr[i + 1]);
       }
     } else if (v === dsPrev) {
       res.pop();
     } else if (v === dbPrev) {
      if (arr[i-1] && res[res.length-1] === arr[i-1]) {
         res.push(arr[i - 1]);
       }
     } else {
       res.push(v);
     }
   }
   return res;
 }

module.exports = {
  transform
};
