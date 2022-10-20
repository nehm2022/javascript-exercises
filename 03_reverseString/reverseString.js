const reverseString = function(str) {
    let newString = "";
    for ( i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
};

reverseString('hello');
reverseString('hello there')
reverseString('123! abc!')
reverseString('')


// Do not edit below this line
module.exports = reverseString;
