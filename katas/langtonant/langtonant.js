const dimension = parseInt(prompt("Enter the dimension of the grid: "));
const nSteps = parseInt(prompt("Enter number of steps: "));
const speed = parseInt(prompt("Enter speed (millisecond): "));

let initialPosition;

function createGrid(){
    let body = document.getElementsByTagName("body")[0];
    let bodyGrid = document.createElement("table");
    let tableBody = document.createElement("tbody");

    let cellNumber = 1;
    let cellMiddle = dimension % 2 == 0 ? (dimension*dimension)/2-(dimension/2)+1 : (dimension*dimension)/2+0.5;

    initialPosition = cellMiddle;
    let cellPainted = 0;
    let cellColor = "white";

    for (let i = 0; i < dimension; i++) {
        let gridRow = document.createElement("tr");
        for (let j = 0; j < dimension; j++) {
            let cell = document.createElement("td");
            let cellContent = document.createElement("div");
            cellContent.style = "padding: 10px; background: " + cellColor;
            cellContent.setAttribute("data-painted", cellPainted);
            let cellDirection = cellMiddle == cellNumber ? "r":"";
            cellContent.setAttribute("data-direction", cellDirection);
            cellContent.id = "c"+cellNumber;
            cell.appendChild(cellContent);
            gridRow.appendChild(cell);
            cellNumber++;
        }
        tableBody.appendChild(gridRow);
    }

    bodyGrid.appendChild(tableBody);
    bodyGrid.setAttribute("border", "1");
    body.appendChild(bodyGrid);
}