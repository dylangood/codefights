function allLongestStrings(inputArray) {
  inputArray.sort( (a, b) => {
    return b.length - a.length;
  });
  var longest = inputArray[0].length;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length < longest) {
      return inputArray.slice(0, i);
    }
  }
  return inputArray;
}
