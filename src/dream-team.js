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
   if (!Array.isArray(members)) {
     return false;
   }

   let dreamTeamArray = [];
   

   for (let index = 0; index < members.length; index++) {
     if (typeof members[index] === "string") {       
      members[index] = members[index].trim()
                                     .charAt(0)
                                     .toUpperCase();      
      dreamTeamArray.push(members[index]);
     }
   }
   return dreamTeamArray
     .map((name) => name[0])
     .sort()
     .join("");
 }

module.exports = {
  createDreamTeam
};
