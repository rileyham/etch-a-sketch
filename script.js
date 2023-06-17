const container = document.getElementById("container");

function drawCells(cellCount) {

    for(let i = 0; i < cellCount; i++) {
        var newRow = document.createElement("div");
        newRow.className = "row";

        for(let j = 0; j < cellCount; j++) {
            var newDiv = document.createElement("div");
            newDiv.id = i + " " + j;
            newDiv.className = "cell"
            newRow.appendChild(newDiv);
        }
        container.appendChild(newRow);
    }
}

drawCells(16);