function sudoku(grid) {
  // Check each row
  var rowCheck = (grid) => {
    return grid.reduce( (good, row) => {
      var seen = {};
      return good && row.reduce( (acc, cell) => {
        if (seen[cell]) {
          return false;
        } else {
          seen[cell] = true;
          return acc && true;
        }
      }, true ); 
    }, true );
  };
  // Check each column
  var rotatedGrid = [];
  for (var i = 0; i < 9; ++i) {
    rotatedGrid[i] = [];
    for (var j = 0; j < 9; ++j) {
      rotatedGrid[i].push(grid[j][i]);
    }
  }
  // Check each subgrid
  var subgridByRows = [];
  for (var i = 0; i < 9; ++i) {
    subgridByRows[i] = [];
    for (var j = 0; j < 9; ++j) {
      var x = 3 * Math.trunc(i / 3) + Math.trunc(j / 3);
      var y = 3 * (i % 3) + j % 3;
      subgridByRows[i].push(grid[x][y]);
    }
  }
  return rowCheck(grid) && rowCheck(rotatedGrid) && rowCheck(subgridByRows);
}
