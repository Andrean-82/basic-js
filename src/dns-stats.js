const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  let dns={};
  let count = 0;
  let array =[];

  for (let elem = 0; elem<domains.length; elem++){
    count = domains[elem].match(/["."]/g).length;
    let arr = domains[elem];
    array.push("."+arr.split('.').reverse().join("."));
    while(count>0){
      arr = arr.slice(arr.indexOf(".")+1, arr.length);
      array.push("."+arr.split('.').reverse().join("."));
      count--;
    }
  }  
  console.log(array);
  for(let i=0; i<array.length;i++){
    if(array[i] in dns) {
      dns[array[i]] += 1;
        
    }else{dns[array[i]] = 1;}
  }
return dns;
}   
//i = domains[elem].match(/["."]/g).length;
// domains[elem] =  domains[elem].replace(/\./g, " ");
module.exports = {
getDNSStats
// getDNSStats(['epam.com', 'info.epam.com']);
};
