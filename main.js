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
    num = prompt("Please enter the number of squares you want the grid to have (maximum is 100)");
    if (num == null) {

    } else if (num > 100) {
        alert("Maximum is 100")
    } else { 
        while (container.hasChildNodes()) {
        container.firstChild.remove();
        }
        createGrid(num);
        }
    
});