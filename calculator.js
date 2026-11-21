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

//This whole portion is the selectors for the buttons
const display = document.querySelector("#display")
const numberButtons = document.querySelectorAll("[data-number]")
const operatorButtons = document.querySelectorAll("[data-operator]")
const equalsButton = document.querySelector("#equals")
let firstNumber;
let operator;
equalsButton.addEventListener("click", () => {
  const secondNumber = Number(display.textContent);
  display.textContent = operate(firstNumber, operator, secondNumber);
});

function numberClick () {
for(const button of numberButtons) {
  button.addEventListener("click", () => {
    display.textContent += button.dataset.number;
  });
}
}
numberClick();

function operatorClick () {
  for (const button of operatorButtons) {
    button.addEventListener("click", () => {
      firstNumber = Number(display.textContent);
      operator = button.dataset.operator;
      display.textContent = "";
    });
  }
}
operatorClick();
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
