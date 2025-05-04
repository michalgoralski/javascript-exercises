const sumAll = function(firstNumber, lastNumber) {
    if(firstNumber < 0 || lastNumber < 0){
        return "ERROR";
    }
    else if(!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)){
        return "ERROR";
    }

    if(firstNumber > lastNumber){
        const helper = firstNumber;
        firstNumber = lastNumber;
        lastNumber = helper;
    }

    let sum = 0;
    for(i = firstNumber; i <= lastNumber; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
