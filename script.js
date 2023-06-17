const container = document.getElementById("container");
const canvasButton = document.getElementById("newCanvas");
let cells = document.getElementsByClassName("cell");
let rows = document.getElementsByClassName("row");

// draws a grid of cells of a given size
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
    cells = document.getElementsByClassName("cell");
    rows = document.getElementsByClassName("row");

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseenter", function () {
            cells[i].classList.add("cell-hover");
        });
        /*
        cells[i].addEventListener("mouseout", function () {
            cells[i].classList.remove("cell-hover");
        });
        */
    }
}

// deletes existing cells
function removeCells () {

    for (let i = cells.length - 1; i >= 0; i--) {
        cells[i].remove()
    }
    for (let i = rows.length - 1; i >= 0; i--) {
        rows[i].remove()
    }
}

drawCells(16); // draw starting canvas

canvasButton.addEventListener("click", function() {
    let newCanvasSize = prompt("Please enter the size of your new canvas.");
    while(newCanvasSize >= 100) {
        newCanvasSize = prompt("Canvas sizes must be smaller than 100 cells.");
    }
    removeCells();
    drawCells(newCanvasSize);

});

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseenter", function () {
        cells[i].classList.add("cell-hover");
    });
    /*
    cells[i].addEventListener("mouseout", function () {
        cells[i].classList.remove("cell-hover");
    });
    */
}
