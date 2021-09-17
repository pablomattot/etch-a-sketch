const container = document.querySelector(".container");
const cellSize = 24;
const gridSize = 16;
const color = "000";
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener('click', clearGrid);

function createGrid() {
    container.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;

    for (let i = 0; i < gridSize ** 2; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}

function draw() {
    const cells = Array.from(container.children);
    drawClick(cells);
    drawDrag(cells);
}

function drawClick(cells) {
    cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            cell.style.backgroundColor = `#${color}`;

        })
    })
}

function drawDrag(cells) {
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            if (e.buttons == 1) {
                cell.style.backgroundColor = `#${color}`;
            }
        })
    })
}

function clearGrid() {
    const cells = Array.from(container.children);
    cells.forEach(cell => {
        cell.style.backgroundColor = "transparent"
    })
}

createGrid();
draw();