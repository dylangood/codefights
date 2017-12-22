function alternatingSums(a) {
  var weights = [0, 0];
  for (var i = 0; i < a.length; i++) {
    weights[0] += a[i];
    weights[1] += a[++i] || 0;
  }
  return weights;
}
