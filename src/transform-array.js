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
  //git throw new NotImplementedError('Not implemented');
  const delbefore = "--discard-prev";
  const delafter = "--discard-next";
  const doubleafter = "--double-next";
  const doublebefore = "--double-prev";
  let arrNew =[];
  if (!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!");
  if(!arr.length) return [];
  if (arr.length === 0) return arr;
  
  for(let elem = 0; elem < arr.length; elem++){
    
    if (!arr[elem]) continue;      
    if (arr[elem] === delbefore){
      if(arr[elem-1] && arr[elem-2] != delafter){
        arrNew.pop();
    }}else if (arr[elem] === delafter){
      if (arr[elem+1]){
        elem++;
    }}else if(arr[elem] === doubleafter){
      if(arr[elem-1]  && arr[elem+2]){
        arrNew.push(arr[elem+1]);      
    }} else if (arr[elem] === doublebefore){
      if(arr[elem-1] && arr[elem-2] != delafter){
        arrNew.push(arr[elem-1]);     
    }}else {arrNew.push(arr[elem]);}
  } 
  return arrNew;
}
module.exports = {
  transform
  // console.log(transform([1, 2, 3, '--double-next']));
};