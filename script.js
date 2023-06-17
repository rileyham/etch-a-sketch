const container = document.getElementById("container");

function drawCells(cellCount) {

    for(let i = 0; i < cellCount; i++) {
        let newRow = document.createElement("div");
        newRow.className = "row";

        for(let j = 0; j < cellCount; j++) {
            let newDiv = document.createElement("div");
            newDiv.id = i + " " + j;
            newDiv.className = "cell"
            newRow.appendChild(newDiv);
        }
        container.appendChild(newRow);
    }
}

drawCells(16);

let cells = document.getElementsByClassName("cell")
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseenter", function () {
        cells[i].classList.add("cell-hover");
    });
    cells[i].addEventListener("mouseout", function () {
        cells[i].classList.remove("cell-hover");
    });
}
