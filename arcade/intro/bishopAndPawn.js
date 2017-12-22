function bishopAndPawn(bishop, pawn) {
  const rows = '12345678';
  const columns = 'abcdefgh';
  var hStep = Math.abs( columns.indexOf(bishop[0]) - columns.indexOf(pawn[0]) );
  var vStep = Math.abs( rows.indexOf(bishop[1]) - rows.indexOf(pawn[1]) );
  return vStep === hStep;
}
