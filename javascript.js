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

const negate = function (a) {
  return -a;
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
      return divide(operandA, operandB);
      break;
    case "modulus":
      return modulus(operandA, operandB);
      break;
    case "negate":
      return negate(operandA);
      break;
    default:
  }
};

const numberButtons = document.querySelectorAll(`.numberBtn`);
numberButtons.forEach((btn) => btn.addEventListener("click", addToDisplay));

function addToDisplay(e) {
  let buttonValue = this.getAttribute("data-value");
  displayValue = displayValue + buttonValue;
  display.textContent = displayValue;
}

let operandA;
let operandB;
let operator;

let displayValue = "";

const display = document.querySelector(".screen");

// const playButtons = document.querySelectorAll(`.playButton`);
// playButtons.forEach((button) =>
//   button.addEventListener("click", playRoundFromButton)
// );

// function playRoundFromButton(e) {
//   let playerChoice = this.getAttribute("data-key");
