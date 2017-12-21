function checkPalindrome(inputString) {
  var halfLength = inputString.length / 2;
  for (var i = 0; i < halfLength; i++) {
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      return false;
    }
  }
  return true;
  
  // if( inputString.length <= 1 ) {
  //   return true;
  // } else {
  //   var iStrArray = inputString.split('');
  //   if ( iStrArray.shift() === iStrArray.pop() ) {
  //     return true && checkPalindrome(iStrArray.join(''));
  //   } else {
  //     return false;
  //   }
  // }
}
