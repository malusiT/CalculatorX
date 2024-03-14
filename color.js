
const colours = ["red","blue","brown","grey"];

function colorChange(){
    let randomColorIndex = Math.floor(Math.random()* colours.length);
    let randomColor = colours[randomColorIndex];
    document.body.style.backgroundColor = randomColor;
}
const button = document.createElement("button");
button.textContent = "Change colour";
button.style.width = "500px";
button.style.height = "125px";
document.body.appendChild(button);

button.addEventListener("click", colorChange)
