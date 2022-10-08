const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
  return arr.reduce((count, current) => {
    return count + current;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce(
    (acumulador, valor) => acumulador * valor
  , 1);
};

const power = function(n, power) {
  return Math.pow(n, power)
};

const factorial = function(n) {
	if (n <= 1) {
    return 1;
  }
  return factorial(n - 1) * n;
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
