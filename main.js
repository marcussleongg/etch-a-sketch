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