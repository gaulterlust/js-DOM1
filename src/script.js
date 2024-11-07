document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('display');
    let displayValue = '';

    function updateDisplay() {
        display.value = displayValue;
    }

    window.inputNumber = function (number) {
        displayValue += number;
        updateDisplay();
    };

    window.inputOperator = function (operator) {
        const lastChar = displayValue.slice(-1);
        if (displayValue !== '' && !['+', '-', '*', '/'].includes(lastChar)) {
            displayValue += operator;
            updateDisplay();
        }
    };

    window.clearDisplay = function () {
        displayValue = '';
        updateDisplay();
    };

    window.deleteLast = function () {
        displayValue = displayValue.slice(0, -1);
        updateDisplay();
    };

    window.calculateResult = function () {
        try {
            displayValue = eval(displayValue).toString(); 
        } catch (error) {
            displayValue = 'Помилка';
        }
        updateDisplay();
    };
});
