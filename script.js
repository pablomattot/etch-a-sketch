const container = document.querySelector(".container");
const cellSize = 24;
const gridSize = 16;

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
    cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            cell.style.backgroundColor = "#000";
        })
    })
}

createGrid();