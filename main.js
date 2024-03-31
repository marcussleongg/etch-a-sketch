const container = document.querySelector("#container");
function createSquare() {
    let square = document.createElement("div");
    square.classList.toggle("square");
    container.appendChild(square);
}
i = 0
while (i<16) {
    createSquare();
    i++
}