function arrayChange(inputArray) {
  var moves = 0;
  var previous = Number.NEGATIVE_INFINITY;
  var arrayCopy = inputArray.map( num => {
    var upgrade = num > previous ? num : previous + 1;
    moves += upgrade - num;
    previous = upgrade;
    return upgrade;
  });
  return moves;
}
