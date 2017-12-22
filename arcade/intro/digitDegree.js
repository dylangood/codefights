function digitDegree(n) {
  var depth = 0;
  var sumDigits = function (n) {
    depth += 1;
    var sum = n.toString().split('').reduce( (acc, digit) => {
      return acc + 1 * digit;
    }, 0);
    if (sum <= 9) {
      return depth;
    } else {
      return sumDigits(sum);
    }
  };
  return n <= 9 ? depth : sumDigits(n);
}
