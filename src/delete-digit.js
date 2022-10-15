const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let tempArray = [];
  let string = n.toString();  
  for (let i = 0; i < string.length; i++) {
    let zy = string.replace(string[i], "");
    tempArray.push(+zy);
    }
return tempArray.reduce((a, b) => Math.max(a, b), -Infinity);
}

module.exports = {
  deleteDigit
};
