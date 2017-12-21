function adjacentElementsProduct(inputArray) {
  var greatest = Number.NEGATIVE_INFINITY;
  for (var i = 1; i < inputArray.length; i++) {
    greatest = Math.max(greatest, inputArray[i - 1] * inputArray[i]);
  }
  return greatest;
}
