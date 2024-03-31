const container = document.querySelector("#container");

function createRow() {
    let row = document.createElement("div");
    row.classList.toggle("row");
    let i = 0;
    while (i<16) {
        let square = document.createElement("div");
        square.classList.toggle("square");
        row.appendChild(square);
        i++;
    }
    container.appendChild(row);
}

let i = 0
while (i<16) {
    createRow();
    i++;
}

let squares = document.querySelectorAll(".square");
for (let square of squares) {
    square.addEventListener('mouseenter', () => {square.classList.add("hovered")})
}

const button = document.querySelector("#btn");
button.addEventListener('click', (num) => {
    num = prompt("Please enter the number of squares you want the grid to have (maximum is 100)");
});