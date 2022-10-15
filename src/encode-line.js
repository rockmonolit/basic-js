const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
   let splittedStr = str.split("");
   let encodeCount = 1;
   let result = [];
   splittedStr.forEach(function (currentLetter, index) {
     if (currentLetter === splittedStr[index + 1]) {
       encodeCount++;
     } else {
       if (encodeCount === 1) {
         result.push(currentLetter);
       } else {
         result.push(+encodeCount + currentLetter);
         encodeCount = 1;
       }
     }
   });

   return result.join(``);
 }

module.exports = {
  encodeLine
};
