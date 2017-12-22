function lineEncoding(s) {
  return s.match(/(.)\1*/g).map( str => {
    return str.length === 1 ? str : str.length + str[0];
  }).join('');
}
