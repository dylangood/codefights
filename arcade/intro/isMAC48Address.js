function isMAC48Address(inputString) {
  var test = /(([0-9]|[A-F]){2}[-]){5}([0-9]|[A-F]){2}/g;
  var result = inputString.match(test);
  return !!result && result.pop().length === inputString.length;
}
