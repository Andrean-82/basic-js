const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  throw new NotImplementedError('Not implemented');
  let nameTeam ="";
  for (let elem = 0; elem < members.length; elem++){
    if (typeof members[elem] === "string" && members[elem].length !=0){
      members[elem] = members[elem][0].toUpperCase();
    } 
  }
  return members.sort().join(""); 
}
module.exports = {
  createDreamTeam
};
