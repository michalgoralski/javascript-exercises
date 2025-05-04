const reverseString = function(inputString) {
    let outputString = ''
    for(i = 0; i < inputString.length; i++){
        outputString += inputString.charAt(inputString.length - 1 - i);
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
