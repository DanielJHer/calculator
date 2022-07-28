// Variables to store values of numbers and operators
let firstNumber = '';
let secondNumber = '';
let currentOperation = null;


// UI for calculator using DOM selectors
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.getElementById('equalsButton');
const clearButton = document.getElementById('clearButton');
const preDisplay = document.getElementById('preDisplayScreen');
const postDisplay = document.getElementById('postDisplayScreen');


// Adding event listener for each button
numberButtons.forEach((button) => 
button.addEventListener('click', () => appendNumber(button.textContent)));

operatorButtons.forEach((button) =>
button.addEventListener('click', () => setOperation(button.textContent)));

clearButton.addEventListener('click', clear);

equalsButton.addEventListener('click', evaluate);


// Functions for displaying numbers & operators
const appendNumber = (number) => preDisplay.textContent += number;

function resetScreen() {
  preDisplay.textContent = ''
}

function clear() {
  preDisplay.textContent = ''; 
  postDisplay.textContent = '';
  firstNumber = '';
  secondNumber = '';
  currentOperation = null;
}

function setOperation(operator) {
  if (currentOperation !== null) {
    evaluate();
  }
  firstNumber = preDisplay.textContent;
  currentOperation = operator;
  postDisplay.textContent = `${preDisplay.textContent} ${currentOperation}`;
  resetScreen();
}

function evaluate() {
  secondNumber = preDisplay.textContent;
  preDisplay.textContent = operate(firstNumber, secondNumber, currentOperation);
  postDisplay.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`
  if (currentOperation === '÷' && secondNumber === '0') {
    alert("can't divide by zero!")
  }
}


// Operate function
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(a, b, operator) {
  a = Number(a)
  b = Number(b)

  switch (operator) {
    case '+':
      return add(a, b)
      break;
    case '−':
      return substract(a, b)
      break;
    case '×':
      return multiply(a, b)
      break;
    case '÷':
      if (b === 0) {
        return null
      } else {
        return divide(a, b)
      }
      break;
    default:
      return null
  }
}