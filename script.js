const container = document.querySelector(".container");
const rangeVal = document.querySelector("#size");
const rangeInd = document.querySelector("#rangeIndicator");
let gridSize = 24;
const color = "000";
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener('click', clearGrid);

rangeVal.addEventListener('mousemove', () => {
    rangeInd.textContent = `${rangeVal.value} X ${rangeVal.value}`;
})
rangeVal.addEventListener('mouseup', reloadGrid);

function reloadGrid() {
    gridSize = Number(rangeVal.value);
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    startApp();
}

function createGrid() {
    for (let i = 0; i < gridSize ** 2; i++) {
        const cell = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
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

function startApp() {
    createGrid();
    draw();
}

startApp();