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
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  if (!date){console.log('Unable to determine the time of year!');}
    try {
      let month = springDate.getMonth();
      console.log(month);
      if(month === undefined){console.log('Unable to determine the time of year!');
      }
      if (month == 1 || month == 2 || month == 3){console.log("spring");
      }
      if (month == 4 || month == 5 || month == 6){console.log("summer");
      }
      if (month == 7 || month == 8 || month == 9){console.log("autumn");
      }
      if (month == 10 || month == 11 || month == 0){console.log("winter");
      }
    } catch (error) {
      console.log( "Invalid date!");
    }
  }

 module.exports = {
//const springDate = new Date(2222, 555, 25);  //`'spring'`
  getSeason
 };

