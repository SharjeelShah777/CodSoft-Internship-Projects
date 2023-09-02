function calculate() {
    try {
        var result = eval(document.calc.txt.value);
        document.calc.txt.value = result;
    } catch (error) {
        document.calc.txt.value = "Error";
    }
}

function appendCharacter(char) {
    document.calc.txt.value += char;
}

function clearInput() {
    document.calc.txt.value = '';
}

function squareRoot() {
    var value = parseFloat(document.calc.txt.value);
    document.calc.txt.value = Math.sqrt(value);
}

function power() {
    var value = parseFloat(document.calc.txt.value);
    document.calc.txt.value = Math.pow(value, 2);
}

function sin() {
    var value = parseFloat(document.calc.txt.value);
    document.calc.txt.value = Math.sin(value);
}

function cos() {
    var value = parseFloat(document.calc.txt.value);
    document.calc.txt.value = Math.cos(value);
}

function tan() {
    var value = parseFloat(document.calc.txt.value);
    document.calc.txt.value = Math.tan(value);
}

// Keyboard event listener to capture key presses
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Calculate on Enter key press
        calculate();
    } else if (event.key === "Escape") {
        // Clear on Esc key press
        clearInput();
    } else if (event.key === "Delete" || event.key === "Backspace") {
        // Delete (Backspace) key functionality
        var currentValue = document.calc.txt.value;
        document.calc.txt.value = currentValue.slice(0, -1); // Remove the last character
    } else if (event.key.match(/[0-9/*\-+.]/)) {
        // Append numeric and operator keys to the input
        appendCharacter(event.key);
    }
});