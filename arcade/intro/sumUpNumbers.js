function sumUpNumbers(inputString) {
  var numbers = inputString.match(/\d+/g) || [];
  return numbers.reduce( (sum, num) => {
    return sum + +num;
  }, 0);
}
