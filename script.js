function add() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber + secondNumber;
  alert("The result is: " + result);
}

function subtract() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber - secondNumber;
  alert("The result is: " + result);
}

function multiply() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber * secondNumber;
  alert("The result is: " + result);
}

function divide() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber / secondNumber;
  alert("The result is: " + result);
}

function simpleInterest() {
  const p = parseFloat(prompt("Enter Principle:"));
  const r = parseFloat(prompt("Enter Rate:"));
  const t = parseFloat(prompt("Enter Time:"));
  const result = (p * r * t) / 100;
  alert("The result is: " + result);
}

function compoundInterest() {
  const p = parseFloat(prompt("Enter Principle:"));
  const r = parseFloat(prompt("Enter Rate:"));
  const t = parseFloat(prompt("Enter Time:"));
  const amount = p * Math.pow(1 + r / 100, t);
  const result = amount - p;
  alert("The result is: " + result);
}
