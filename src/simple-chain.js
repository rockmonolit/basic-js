const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value) {
    if (!arguments) {
      this.result.push("( )");
    }

    this.result.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    let incorrectLink = `You can't remove incorrect link!`;
    
    if (
      !position ||
      !this.result[position - 1] ||
      position === undefined ||
      position !== +position
    ) {
      this.result.length = 0;
      throw new Error(incorrectLink);
    } else {
      this.result.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.result.reverse();
    return this;
  },

  finishChain() {
    let finisher = this.result.join(`~~`);
    this.result.length = 0;
    return finisher;
  },
};

module.exports = {
  chainMaker
};
