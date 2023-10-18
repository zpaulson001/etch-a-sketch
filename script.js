const GRID_SIZE = 540;
const SIDE_LENGTH = 16;
const gridContainer = document.querySelector(".grid");

const squareHover = (e) => {
    if (e.target.matches(".square")) {
        e.target.classList.add("bg-hover");
        console.log(e.target.className);
    }
}

//Generate squares row by row
for (let i = 1; i <= SIDE_LENGTH; i++) {
    let row = document.createElement("div");
    gridContainer.appendChild(row);
    row.className = "row";
    for (let j = 1; j <= SIDE_LENGTH; j++) {
        let square = document.createElement("div");
        square.className = "square";
        row.appendChild(square);
    }
}

document.addEventListener("mouseover", squareHover);