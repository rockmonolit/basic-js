const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(number) {
   let stringNumber = number.toString();
   let sumAcc = 0;
   for (let i = 0; i < stringNumber.length; i++) {
     sumAcc += +stringNumber[i];
   }
   if (stringNumber.length < 2) {
     return sumAcc;
   } else {
     return getSumOfDigits(sumAcc);
   }
 }

module.exports = {
  getSumOfDigits
};
