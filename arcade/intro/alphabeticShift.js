function alphabeticShift(inputString) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyza';
  return inputString.split('').map( char => {
    return alphabet.charAt(1 + alphabet.indexOf(char));
  }).join('');
}
