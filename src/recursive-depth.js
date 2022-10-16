const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return false;
    }

    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        depth += this.calculateDepth(arr.flat(1));
        break;
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
