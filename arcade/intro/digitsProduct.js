function digitsProduct(product) {
  if (product === 0) { return 10; }
  if (product === 1) { return 1; }
  
  const divisors = '98765432'.split('');
  var factor = product;
  var i = 0;
  var digits = [];
  while (factor !== 1) {
    if (factor % divisors[i] === 0) {
      factor = factor / divisors[i];
      digits.push(divisors[i]);
      i = 0;
    } else {
      if (divisors[i] === '2') { return -1; }
      i++;
    }
  }
  return +digits.reverse().join('');
}
