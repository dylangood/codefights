function arrayMaximalAdjacentDifference(inputArray) {
  var biggest = 0;
  for (var i = 1; i < inputArray.length; i++) {
    biggest = Math.max(biggest, Math.abs(inputArray[i] - inputArray[i - 1]));
  }
  return biggest;
}
