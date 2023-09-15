const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const modulus = function (a, b) {
  return a % b;
};

const operate = function (operator, operandA, operandB) {
  switch (operator) {
    case "add":
      return add(operandA, operandB);
      break;
    case "subtract":
      return subtract(operandA, operandB);
      break;
    case "multiply":
      return multiply(operandA, operandB);
      break;
    case "divide":
      if (operandB === 0) {
        alert("You can't divide by zero");
        return "Error";
      }
      return divide(operandA, operandB);
      break;
    case "modulus":
      return modulus(operandA, operandB);
      break;

    default:
  }
};

function clearDisplay() {
  displayValue = "";
  display.textContent = displayValue;
}

const numberButtons = document.querySelectorAll(`.numberBtn`);
numberButtons.forEach((btn) => btn.addEventListener("click", addToDisplay));

const operatorButtons = document.querySelectorAll(`.operatorBtn`);
operatorButtons.forEach((btn) => btn.addEventListener("click", runOperateBtn));

const equalsButton = document.querySelector(`.equalsBtn`);
equalsButton.addEventListener("click", calculate);

const clearButton = document.querySelector(`.clearBtn`);
clearButton.addEventListener("click", reset);

const decimalButton = document.querySelector(`.decimalBtn`);
decimalButton.addEventListener("click", addDecimal);

const negativeButton = document.querySelector(`.negativeBtn`);
negativeButton.addEventListener("click", negate);

function negate(e) {
  if (displayValue[0] === "-") {
    updateDisplay(displayValue.slice(1));
  } else {
    updateDisplay("-" + displayValue);
  }
}

function addDecimal(e) {
  if (displayValue.includes(".")) {
    return;
  } else {
    updateDisplay(displayValue + ".");
  }
}

function reset() {
  displayValue = "";
  previousValue = "";
  clearDisplay();
}

function runOperateBtn(e) {
  currentOperator = this.getAttribute("data-operator");
  previousValue = Number(displayValue);
  clearDisplay();
}

function calculate() {
  if (previousValue === "") {
    return;
  }
  let result = operate(currentOperator, previousValue, Number(displayValue));
  updateDisplay(Math.round(result * 100) / 100);
}

function updateDisplay(value) {
  if (isNaN(value)) {
    reset();
    return;
  }
  displayValue = value;
  display.textContent = value;
}

function addToDisplay(e) {
  console.log(e);
  let buttonValue = this.getAttribute("data-value");
  console.log(this);
  updateDisplay(displayValue + buttonValue);
}

let operandA;
let operandB;
let operator;

let currentOperator = "";
let displayValue = "";
let previousValue = "";

const display = document.querySelector(".screen");

// const playButtons = document.querySelectorAll(`.playButton`);
// playButtons.forEach((button) =>
//   button.addEventListener("click", playRoundFromButton)
// );

// function playRoundFromButton(e) {
//   let playerChoice = this.getAttribute("data-key");
