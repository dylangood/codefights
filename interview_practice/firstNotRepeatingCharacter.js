function firstNotRepeatingCharacter(s) {
  var allChars = new Set();
  var nonrepeatingChars = new Set();
  for (var i = 0; i < s.length; i++) {
    if (allChars.has(s[i])) {
      nonrepeatingChars.delete(s[i]);
    } else {
      allChars.add(s[i]);
      nonrepeatingChars.add(s[i]);
    }
  }
  nonrepeatingChars.add('_');
  console.log(nonrepeatingChars.values());
  return nonrepeatingChars.values().next().value;
}
// function firstNotRepeatingCharacter(s) {
//   var results = s.match(/([a-z])(?!.*\1)/);
//   console.log(results);
//   if(results.index === s.indexOf(results[0])) {
//     return results[0];
//   } else {
//     return '_';
//   }
// }
