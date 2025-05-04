const convertToCelsius = function(degreesFahrenheit) {
  let result = (degreesFahrenheit - 32) * 5/9;
  result = Math.round(result * 10) / 10;
  return result;
};

const convertToFahrenheit = function(degreesCelcius) {
  let result = (degreesCelcius * 9/5) + 32;
  result = Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
