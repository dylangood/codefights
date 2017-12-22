function differentSymbolsNaive(s) {
  var arr = s.split('');
  var letters = {};
  var count = 0;
  while (arr.length > 0) {
    var char = arr.pop();
    if (!letters[char]) {
      letters[char] = 1;
      count += 1;
    }
  }
  return count;
}
