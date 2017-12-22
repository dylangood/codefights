function minesweeper(matrix) {
  var countMines = function (matrix, i, j) {
    var count = 0;
    for (var x = Math.max(0, i - 1); 
         x <= Math.min(i + 1, matrix.length - 1); x++) {
      for (var y = Math.max(0, j - 1); 
           y <= Math.min(j + 1, matrix[x].length - 1); y++) {
        if ( matrix[x][y] && (x !== i || y !== j) ) { count += 1; }
      }
    }
    return count;
  };
  return matrix.map( (row, i, matrix) => {
    return row.map( (cell, j) => {
      var count = countMines(matrix, i, j);
      console.log(count);
      return count;
    });
  });
}
