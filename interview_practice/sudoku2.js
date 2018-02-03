var sudoku2 = function verifyNumberUniqueness3Ways(grid) {
  let outcome = false;
  const checkGridByRows = grid => {
    return grid.reduce( (prevRows, row) => {
      var seen = {};
      return prevRows && row.reduce( (acc, num) => {
        if (seen[num]) {
          return acc && false;
        } else {
          seen[num] = /[1-9]/.test(num) ? true : false;
          return acc && true;
        }
      }, true);
    }, true);
  };
  
  const transpose = grid => {
    let newGrid = [];
    for (var i = 0; i < 9; i += 1) {
      let newRow = [];
      for (var j = 0; j < 9; j += 1) {
        newRow.push(grid[j][i]);
      }
      newGrid.push(newRow);
    }
    return newGrid;
  };
  
  const unwind = grid => {
    let newGrid = [];
    for (var i = 0; i < 9; i += 1) {
      let newRow = [];
      for (var j = 0; j < 9; j += 1) {
        let x = 3 * Math.floor(i / 3) + Math.floor(j / 3);
        let y = 3 * (i % 3) + j % 3;
        newRow.push(grid[x][y]);
      }
      newGrid.push(newRow);
    }
    return newGrid;
  };
  
  outcome = checkGridByRows(grid) 
    && checkGridByRows(transpose(grid)) 
    && checkGridByRows(unwind(grid));
  
  return outcome;
};
