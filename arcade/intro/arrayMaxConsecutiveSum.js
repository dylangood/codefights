function arrayMaxConsecutiveSum(inputArray, k) {
  var outputs = new Array(inputArray.length - k + 1);
  var count = 0;
  outputs.fill(0);
  for (var j = 0; j < k; j++) {
    outputs[0] += inputArray[j];
  }
  for (var i = 1; i < outputs.length; i++) {
    outputs[i] = outputs[i - 1] - inputArray[i - 1] + inputArray[i + k - 1];
  }
  return Math.max(...outputs);
}
