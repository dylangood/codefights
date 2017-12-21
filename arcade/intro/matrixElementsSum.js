function matrixElementsSum(matrix) {
  var skip = new Array(matrix[0].length).fill(false);
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      while (skip[j]) { j++; }
      sum += matrix[i][j] || 0;
      if ( matrix[i][j] === 0 ) {
        skip[j] = true;
      }
    }
  }
  return sum;
}
