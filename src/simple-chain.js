const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    return this.array.length;
  },
  addLink(value) {
   // throw new NotImplementedError('Not implemented');
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    if(!this.array || !position || typeof position != "number" || position < 1 || this.array.length < position){
      this.array.length = 0;
      this.array = [];
      throw new Error ("You can't remove incorrect link!");
    }
    this.array.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    this.array.reverse();
    return this;    
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    let arrayNew = this.array.join('~~');
    this.array.length = 0;
    this.array = [];
    return arrayNew;
  } 
};

module.exports = {
chainMaker
// console.log(chainMaker.addLink(false).reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(1.233).addLink(false).addLink(1).reverseChain().addLink(1).finishChain());
};
