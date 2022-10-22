
/*const repeatString = function(para1, para2) {
    if (para2 < 0) {
        return "ERROR";
    }
    for ( let i = 0; i < para2; i++) {
        return para1.repeat(para2);
        }
    
    
};

repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
*/

const repeatString = function(word, times) {
    if (times < 0) return 'ERROR';
    let string = '';
    for (let i = 0; i < times; i++) {
      string += word;
    }
    return string;
  };
  




// Do not edit below this line
module.exports = repeatString;
