function longestWord(text) {
  var words = text.match(/\w+/g);
  return words.reduce( (acc, word) => {
    return word.length > acc.length ? word : acc;
  }, '');
}
