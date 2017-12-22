function spiralNumbers(n) {
  var matrix = new Array(n);
  for (var i = 0; i < matrix.length; ++i) {
    matrix[i] = new Array(n);
    matrix[i].fill(null);
  }
  const rightTurns = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
  ];
  var direction = rightTurns[0];
  var next = tuple => {
    var row = tuple[0];
    var col = tuple[1];
    var nextTuple = [];
    if ( matrix[row + direction[0]] && matrix[row + direction[0]][col + direction[1]] === null) {
      nextTuple = [row + direction[0], col + direction[1]];
    } else {
      direction = rightTurns[1 + rightTurns.indexOf(direction)] || rightTurns[0];
      nextTuple = [row + direction[0], col + direction[1]];
    }
    return nextTuple;
  };
  var location = [0, 0];
  for (var i = 1; i < n * n + 1; ++i) {
    matrix[location[0]][location[1]] = i;
    location = next(location);
  }
  return matrix;
}
