function buildPalindrome(str) {
  var nondrome = null;
  var i = 0;
  
  var isPalindrome = str => {
    var j = 0;
    while ( str[j] === str[str.length - 1 - j] ) {
      if ( j >= str.length - 1 ) {
        return true;
      }
      j++;
    }
    return false;
  };
  
  while ( nondrome === null && i < str.length ) {
    if ( isPalindrome(str.slice(i)) ) {
      nondrome = str.slice(0, i);
    }
    i++;
  }
  
  return str.concat(nondrome.split('').reverse().join(''));
}
