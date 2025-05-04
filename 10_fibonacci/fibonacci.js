const fibonacci = function(sequencePosition) {
    sequencePosition = parseInt(sequencePosition);
    if(sequencePosition < 0) return "OOPS";
    if(sequencePosition === 0) return 0;
    if(sequencePosition === 1 || sequencePosition === 2) return 1;
    if(sequencePosition === 3) return 2;
    let sequenceSlice = [1, 1, 2];
    for(i = 0; i < sequencePosition - 3; i++){
        let currentNumber =  sequenceSlice[sequenceSlice.length - 2] + sequenceSlice[sequenceSlice.length - 1]
        sequenceSlice.shift();
        sequenceSlice.push(currentNumber);
    }
    return sequenceSlice.pop();
};

fibonacci(8);

// Do not edit below this line
module.exports = fibonacci;
