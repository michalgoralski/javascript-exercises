const palindromes = function (inputString) {
    const cleanString = inputString.toLowerCase().split('').filter(isNotLetter).join('');

    function isNotLetter(char){
        if(!(char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
            && !(char.charCodeAt(0) > 48 && char.charCodeAt(0) < 58)) return false;
        return char;
    };

    const reversedString = cleanString.split("").reverse().join('');

    if(cleanString === reversedString) return true;
    return false;
};

palindromes("r3ace3car")

// Do not edit below this line
module.exports = palindromes;
