function isCryptSolution(crypt, solution) {
  let equation = crypt.map( word => {
    return num = word.split('').map( letter => {
      let pair = solution.find( pair => {
        return pair[0] === letter;
      });
      return pair[1];
    }).join('');
  });
  let leading0s = equation.reduce( (acc, term) => {
    return acc || ( term[0] === '0' && term.length > 1 );
  }, false);
  if (leading0s) { return false; }
  return 1 * equation[0] + 1 * equation[1] === 1 * equation[2];
}
