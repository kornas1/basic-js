const CustomError = require("../extensions/custom-error");

const chainMaker = {
  values: [],

  getLength() {
    return this.values.getLength;
  },

  addLink(value) {
    this.values.push('( '+ value + ' )');
    return this;
  },
  removeLink(position) {
   if (Number.isNaN(position)|| position > this.values.length || position < 0 || (!Number.isInteger(position))){
    this.values.splice(0,this.values.length);
    throw new Error;
  } else {
      this.values.splice(position-1,1);
      return this;
    }
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    let result = this.values.join("~~");
    this.values= [];
    return result;

  }
};
module.exports = chainMaker;
