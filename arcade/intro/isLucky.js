function isLucky(n) {
  var arr = n.toString().split('');
  var sum1 = 0, sum2 = 0;
  for (var i = 0; i < arr.length / 2; i++) {
    sum1 += 1 * arr[i];
    sum2 += 1 * arr[arr.length - 1 - i];
  }
  return sum1 === sum2;
}
