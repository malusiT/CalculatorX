const inputEl = document.querySelectorAll(".input");
const displayEl = document.getElementById("display");
const clearEL = document.getElementById("clear");

// Getting the methods inputs
const sumEl = document.getElementById("sum");
const subtractEl = document.getElementById("subtract");
const divEl = document.getElementById("div");
const multiplyEl = document.getElementById("multiply");


const equalsEL = document.getElementById("equal");


// Number inputsto the display
document.addEventListener("click", function(event) {
    const clickedElement = event.target;
    
    if (clickedElement.classList.contains("input")) {
        const clickedInputValue = clickedElement.value;
        displayEl.innerText += clickedInputValue;
    }
});

// Methods of calculation
sumEl.addEventListener("click", function (){
    displayEl.innerText += " + ";

})
subtractEl.addEventListener("click", function (){
    displayEl.innerText += " - ";

})
divEl.addEventListener("click", function (){
    displayEl.innerText += " / ";

})
multiplyEl.addEventListener("click", function (){
    displayEl.innerText += " * ";

})
equalsEL.addEventListener("click", function (){
    displayEl.innerText += "=";

})

clearEL.addEventListener("click", function() {

    displayEl.innerText = " ";

});
