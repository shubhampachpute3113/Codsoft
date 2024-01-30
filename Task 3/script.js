let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
  currentInput += num;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function deleteLastChar() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    display.value = 'Error';
  }
}

function updateDisplay() {
  display.value = currentInput;
}
