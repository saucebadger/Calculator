const add = function(a,b) {
  const result = a+b

  return result
	
};

const subtract = function(a,b) {
  const result = a - b
	return result
};

const multiply = function(a,b) {
const result = a * b
	return result
};

const power = function(b,e) {
  const result = b ** e
  return result
	
};

const percent = function(a,b) {
const result = (a / 100) * b
return result
};

const divide = function (a,b) {
  const result = a / b 
  return result
};

const operate = function(a, operator, b) {
  if (operator === "+") {
    return add(a,b);
  }
  if (operator === "-") {
    return subtract(a,b);
  }
  if (operator === "*") {
    return multiply(a,b);
  }
  if (operator === "**") {
    return power(a,b)
  }
  if(operator === "%") {
    return percent(a,b)
  }
  if (operator === "/") {
    return divide(a,b)
  }
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
