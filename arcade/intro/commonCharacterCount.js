function commonCharacterCount(s1, s2) {
  var countChars = str => {
    var counts = {};
    str.split('').forEach( char => {
      counts[char] = counts[char] + 1 || 1;
    });
    return counts;
  };
  var s1counts = countChars(s1);
  var s2counts = countChars(s2);
  var common = 0;
  for ( char in s1counts ) {
    common += Math.min(s1counts[char] || 0, s2counts[char] || 0);
  }
  for ( char in s2counts ) {
    common += Math.min(s1counts[char] || 0, s2counts[char] || 0);
  }
  return common / 2;
}