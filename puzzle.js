const btnShuffle = document.querySelector('#shuffle')

function swapTiles (cell1, cell2) {
  let tempTile = document.getElementById(cell1).className
  document.getElementById(cell1).className = document.getElementById(cell2).className
  document.getElementById(cell2).className = tempTile
}

btnShuffle.addEventListener('click', () => {
  for (let row = 1; row <= 3; row++) {
    for (let column = 1; column <= 3; column++) {
      let row2 = Math.floor(Math.random() * 3 + 1)
      let column2 = Math.floor(Math.random() * 3 + 1)
      swapTiles('cell' + row + column, 'cell' + row2 + column2)
    }
  }
})

function tileValidation (column, row) {
  if (column < 3) {
    if (document.getElementById('cell' + row + (column + 1)).className === 'tile9') {
      swapTiles('cell' + row + column, 'cell' + row + (column + 1))
      return
    }
  }
  if (column > 1) {
    if (document.getElementById('cell' + row + (column - 1)).className === 'tile9') {
      swapTiles('cell' + row + column, 'cell' + row + (column - 1))
      return
    }
  }
  if (row > 1) {
    if (document.getElementById('cell' + (row - 1) + column).className === 'tile9') {
      swapTiles('cell' + row + column, 'cell' + (row - 1) + column)
      return
    }
  }
  if (row < 3) {
    if (document.getElementById('cell' + (row + 1) + column).className === 'tile9') {
      swapTiles('cell' + row + column, 'cell' + (row + 1) + column)
    }
  }
}

function clickTile (row, column) {
  let cell = document.getElementById('cell' + row + column)
  let tile = cell.className
  if (tile !== 'tile9') {
    tileValidation(column, row)
  }

}

