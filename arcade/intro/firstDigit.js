function firstDigit(inputString) {
  var index = inputString.search(/[0-9]/g);
  return inputString.substr(index, 1);
}
