const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = "get") {
  //throw new NotImplementedError('Not implemented');
  
  if (date === "get"){ return 'Unable to determine the time of year!';}
  if (!date){throw new Error ('Unable to determine the time of year!');}
  
  try {      
      let month = date.getMonth();
      let day = date.getTime();
      if (month == 2 || month == 3 || month == 4){return "spring";
      }
      if (month == 5 || month == 6 || month == 7){return "summer";
      }
      if (month == 8 || month == 9 || month == 10){return "autumn";
      }
      if (month == 11 || month == 0|| month == 1 ){return "winter";
      }
    } catch (error) {
      throw new Error ("Invalid date!");
    }
  }

 module.exports = {
// const springDate = new Date(winter);  //`'winter'`
//  console.log(getSeason(new Date(481, 1, 5, 21, 58, 37, 272)));
 getSeason

 };

