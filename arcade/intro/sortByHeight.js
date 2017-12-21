function sortByHeight(a) {
  var heights = a.filter( num => {
    return num > 0;
  });
  heights.sort( (a, b) => {
    return b - a;
  });
  a.forEach( (num, i, arr) => {
    if (num > 0) {
      arr[i] = heights.pop();
    }
  });
  return a;
}
