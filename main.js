let currentPlayer = "X";

let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

// get all td elements from the DOM and store in cellElementArray
const cellElementArray = document.querySelectorAll("td");

// write for loop to iterate over cellElementArray
for (let i = 0; i < cellElementArray.length; i++) {
  // set cellElementArray[i] to currentCell variable
  let currentCell = cellElementArray[i];

  // add an event listener to the currentCell
  currentCell.addEventListener("click", function(event) {
    const clickedCellElement = event.target;
    // console log the id of the cell being clicked on
    if (currentPlayer === "X") {
      clickedCellElement.innerHTML = "X";
      currentPlayer = "O";
      playerXSelections.push(Number(clickedCellElement.id));
    } else {
      clickedCellElement.innerHTML = "O";
      currentPlayer = "X";
      playerOSelections.push(Number(clickedCellElement.id));
    }
    if(checkForWin(winningCombinations, playerXSelections)){
        alert(currentPlayer+" wins")
    }
    if(checkForWin(winningCombinations, playerOSelections)){
        alert(currentPlayer+" wins")
    }
  });
}

function checkForWin(combos, selections) {
  for (let i = 0; i < combos.length; i++) {
    let currentCombo = combos[i];
    let matches = 0;
    for (let j = 0; j < currentCombo.length; j++) {
      let currentNumber = currentCombo[j];
      if (selections.includes(currentNumber)) {
        matches++;
      }
      if (matches === 3) {
        return true;
      }
    }
  }
  return false;
}