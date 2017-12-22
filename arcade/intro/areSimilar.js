function areSimilar(a, b) {
  var diffs = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diffs.push([a[i], b[i]]);
      if (diffs.length > 2) {
        return false;
      } else if (diffs.length > 1) {
        if (diffs[0][0] !== diffs[1][1] || diffs[0][1] !== diffs[1][0]) {
          return false;
        }
      }
    }
  }
  return diffs.length % 2 === 0;
}
