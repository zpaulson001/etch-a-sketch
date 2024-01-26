const gridContainer = document.querySelector(".grid");
const newGridBtn = document.querySelector("button");

const squareHover = (e) => {
    if (e.target.matches(".square")) {
        e.target.classList.add("bg-hover");
    }
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateGrid() {
    const sideLength = parseInt(prompt("Enter number of square per side:"));

    if (isNaN(sideLength) || sideLength < 1 || sideLength > 100) {
        console.log("here");
        alert("Error. Please enter a number between 1 and 100");
        return;
    }

    removeAllChildren(gridContainer);
    
    //row by row
    for (let i = 1; i <= sideLength; i++) {
        let row = document.createElement("div");
        gridContainer.appendChild(row);
        row.className = "row";
        for (let j = 1; j <= sideLength; j++) {
            let square = document.createElement("div");
            square.className = "square";
            row.appendChild(square);
        }
    }
}

//main
generateGrid();
document.addEventListener("mouseover", squareHover);
newGridBtn.addEventListener("click", generateGrid);