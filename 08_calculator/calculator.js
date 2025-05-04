const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(a) {
  return a.reduce((acc, cur) => acc * cur, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a){
  let factorial = 1;
  for(i = 1; i <= a; i++) factorial *= i;
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
