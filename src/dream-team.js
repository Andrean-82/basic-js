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
  // throw new NotImplementedError('Not implemented');
  if (!Array.isArray(members)) return false;
  let nameTeam ="";
  let membersNew = [];
  for (let elem = 0; elem < members.length; elem++){
    if (typeof members[elem] === "string" && members[elem].length !=0){
      membersNew.push(members[elem].replace(/\s+/g, '').toUpperCase());
    }
}
membersNew.sort();
membersNew.forEach(elem =>{
  elem = elem.slice(0, 1);
  nameTeam +=elem;
  });
  return nameTeam;
}
module.exports = {
  createDreamTeam
};
