function chessBoardCellColor(cell1, cell2) {
  const rankToNum = cell => {
    const ranks = 'ABCDEFGH';
    return ranks.indexOf( cell[0] );
  };
  return !( ( Math.abs(rankToNum(cell2) - rankToNum(cell1)) 
             + Math.abs(1 * cell2[1] - 1 * cell1[1]) ) % 2 );
}
