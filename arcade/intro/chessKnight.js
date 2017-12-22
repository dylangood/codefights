function chessKnight(cell) {
  const rows = '12345678';
  const cols = 'abcdefgh';
  var row = rows.indexOf(cell[1]);
  var col = cols.indexOf(cell[0]);
  moves = [];
  for (var k = 1; k < 3; k++) {
    for (var i = -1 * k; i < 1 * k + 1; i += 2 * k) {
      for (var j = -2 / k; j < 2 / k + 1; j += 4 / k) {
        if ( cols.charAt(col + j) && rows.charAt(row + i) ) {
          moves.push( cols.charAt(col + j) + rows.charAt(row + i) );
        }
      }
    }
  }
  return moves.length;
}
