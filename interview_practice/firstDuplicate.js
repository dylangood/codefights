function firstDuplicate(a) {
  var store = {};
  for (var i = 0; i < a.length; i++) {
    if (store[a[i]] === undefined) {
      store[a[i]] = i;
    } else {
      return a[i];
    }
  }
  return -1;
}
