
        let display = document.getElementById("display");
        let currentInput = '';
        let resultDisplayed = false;

        // Append numbers to the display
        function appendNumber(number) {
            if (resultDisplayed) {
                currentInput = number;
                resultDisplayed = false;
            } else {
                currentInput += number;
            }
            updateDisplay();
        }

        // Append operators to the display
        function appendOperator(operator) {
            if (resultDisplayed) {
                resultDisplayed = false;
            }
            currentInput += operator;
            updateDisplay();
        }

        // Clear the display
        function clearDisplay() {
            currentInput = '';
            updateDisplay();
        }

        // Delete the last character
        function deleteLast() {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }

        // Perform the calculation
        function calculate() {
            try {
                currentInput = eval(currentInput).toString();
                resultDisplayed = true;
                updateDisplay();
            } catch (error) {
                currentInput = 'Error';
                updateDisplay();
            }
        }

        // Update the display element
        function updateDisplay() {
            display.innerText = currentInput || '0';
        }
    