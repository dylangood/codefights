function palindromeRearranging(inputString) {
  var characters = {};
  inputString.split('').forEach( char => {
    characters[char] = characters[char] + 1 || 1;
  });
  var oddFlag = false;
  for (char in characters) {
    if (characters[char] % 2) {
      if (oddFlag) {
        return false;
      } else {
        oddFlag = true;
      }
    }
  }
  return true;
}
