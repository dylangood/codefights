function reverseParentheses(s) {
  var S = s.split('');
  var matchClose = chars => {
    var depth = 0;
    for (var i = 0; i < chars.length; i++) {
      if (chars[i] === '(') {
        depth += 1;
      }
      if (chars[i] === ')') {
        if (depth === 0) {
          return i;
        } else {
          depth -= 1;
        }
      }
    }
    return false;
  };
  var swapParens = chars => {
    for (var i = 0; i < chars.length; i++) {
      if (chars[i] === '(') {
        chars[i] = ')';
      } else if (chars[i] === ')') {
        chars[i] = '(';
      }
    }
  };
  var open = S.indexOf('(');
  if (open < 0) { return s; }
  var close = open + 1 + matchClose(S.slice(open + 1));
  var substring = S.slice(open + 1, close).reverse();
  console.log(substring);
  swapParens(substring);
  console.log(substring);
  S.splice(open, close - open + 1, ...substring);
  return reverseParentheses(S.join(''));
}
