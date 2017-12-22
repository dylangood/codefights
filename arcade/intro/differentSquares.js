function differentSquares(matrix) {
  var squares = [];
  for (var i = 0; i < matrix.length - 1; ++i) {
    for (var j = 0; j < matrix[i].length - 1; ++j) {
      var square = matrix[i][j].toString().concat(matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]);
      var newSquare = true;
      var index = squares.findIndex( storedSquare => {
        if (storedSquare === square) {
          newSquare = false;
          return true;
        } else if (storedSquare < square) { return true; }
      });
      index = index < 0 ? squares.length : index;
      if (newSquare) { squares.splice(index, 0, square); }
    }
  }
  return squares.length;
}
