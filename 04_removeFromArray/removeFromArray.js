const removeFromArray = function(inputArray, ...elementsToRemove) {
    let outputArray = inputArray;
    elementsToRemove.forEach(element => {
        outputArray = outputArray.filter((item) => item !== element);
        console.log(outputArray)
    });
    return outputArray;
};

// removeFromArray([1, 2, 3, 4], 1, 2)

// Do not edit below this line
module.exports = removeFromArray;
