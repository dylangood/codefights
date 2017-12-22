function isBeautifulString(inputString) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  var counts = {};
  letters.split('').forEach( char => {
    counts[char] = 0;
  });
  inputString.split('').forEach( char => {
    counts[char] = counts[char] + 1;
  });
  return letters.split('').slice(0, 25).reduce( (acc, char, i) => {
    return acc && counts[char] >= counts[ letters[i + 1] ];
  }, true);
}
