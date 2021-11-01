const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(x) {
	mySum = 0
  for (i = 0; i < x.length; i++) {
    mySum += x[i]
  }
  return mySum
};

const multiply = function(x) {
  myProduct = 1
  for (i = 0; i < x.length; i++) {
    myProduct *= x[i]
  }
  return myProduct
};

const power = function(x, y) {
  return x**y
};

const factorial = function(x) {
	myFactorial = 1
  for (i = x; i > 0; i--) {
    myFactorial *= i
  }
  return myFactorial
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
