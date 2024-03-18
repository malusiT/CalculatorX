const inputEl = document.querySelectorAll(".input");
const displayEl = document.getElementById("display");
const clearEl = document.getElementById("clear");
const sumEl = document.getElementById("sum");
const subtractEl = document.getElementById("subtract");
const divEl = document.getElementById("div");
const multiplyEl = document.getElementById("multiply");
const equalsEl = document.getElementById("equal");

let num1 = "";
let num2 = "";
let operator = "";

inputEl.forEach(input => {
    input.addEventListener("click", function(event) {
        const clickedInputValue = event.target.value;
        displayEl.innerText += clickedInputValue;
    });
});

sumEl.addEventListener("click", function() {
    num1 = parseFloat(displayEl.innerText);
    operator = "+";
    displayEl.innerText = "";
});

subtractEl.addEventListener("click", function() {
    num1 = parseFloat(displayEl.innerText);
    operator = "-";
    displayEl.innerText = "";
});

divEl.addEventListener("click", function() {
    num1 = parseFloat(displayEl.innerText);
    operator = "/";
    displayEl.innerText = "";
});

multiplyEl.addEventListener("click", function() {
    num1 = parseFloat(displayEl.innerText);
    operator = "*";
    displayEl.innerText = "";
});

equalsEl.addEventListener("click", function() {
    num2 = parseFloat(displayEl.innerText);
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        default:
            result = "Invalid Operation";
            break;
    }
    displayEl.innerText = result;
});

clearEl.addEventListener("click", function() {
    displayEl.innerText = "";
    num1 = "";
    num2 = "";
    operator = "";
});
