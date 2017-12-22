function extractEachKth(inputArray, k) {
  var output = inputArray.slice();
  for (var i = Math.floor(output.length / k) * k - 1; i >= 0; i -= k) {
    output.splice(i, 1);
  }
  return output;
}
