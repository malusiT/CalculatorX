
const colours = ["black", "darkgrey", "silver-grey", "brown", "grey", "silver"];

function colorChange() {
    let randomColorIndex = Math.floor(Math.random() * colours.length);
    let randomColor = colours[randomColorIndex];
    document.body.style.backgroundColor = randomColor;

    const display = document.getElementById("display");
    if (display) { // Check if the display element exists
        if (randomColor === colours[1]) {
            display.style.backgroundColor = "navy";
            display.style.color = "white";
        } else {
            // Reset styles if it's not the second color
            display.style.backgroundColor = "";
            display.style.color = "";
        }
    }
}

const button = document.createElement("button");
button.textContent = "Change colour";
button.style.width = "420px";
button.style.height = "62.5px";
button.style.borderRadius = "5px";
document.body.appendChild(button);

button.addEventListener("click", colorChange);
