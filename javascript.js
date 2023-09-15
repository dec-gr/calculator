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

let operandA;
let operandB;
let operator;
