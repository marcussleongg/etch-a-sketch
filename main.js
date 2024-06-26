const container = document.querySelector("#container");

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function createGrid(gridNum) {
    function createRow() {
        let row = document.createElement("div");
        row.classList.toggle("row");
        let i = 0;
        while (i<gridNum) {
            let square = document.createElement("div");
            let squareDimension = 555/gridNum;
            console.log(squareDimension);
            square.style.width = squareDimension + "px";
            square.style.height = squareDimension + "px";
            square.classList.add("square")
            row.appendChild(square);
            i++;
        }
        container.appendChild(row);
    }
    
    let i = 0
    while (i<gridNum) {
        createRow();
        i++;
    }

    let squares = document.querySelectorAll(".square");
    for (let square of squares) {
        square.addEventListener('mouseenter', () => {square.style.backgroundColor = randomColor()})
    }
}

createGrid(16);

const button = document.querySelector("#btn");
button.addEventListener('click', (num) => {
    num = prompt("Please enter a number from 1 to 100");
    if (num == null) {

    } else if (num > 100 || num < 1) {
        alert("Enter a number between 1 and 100")
    } else { 
        while (container.hasChildNodes()) {
        container.firstChild.remove();
        }
        createGrid(num);
        }
    
});

const resetBtn = document.querySelector("#resetbtn");
resetBtn.addEventListener('click', () => {
    let squares = document.querySelectorAll(".square");
    for (let square of squares) {
        square.style.backgroundColor = "pink";
    }
})