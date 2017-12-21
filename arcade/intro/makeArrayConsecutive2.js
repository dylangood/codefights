function makeArrayConsecutive2(statues) {
  statues.sort( (a, b) => {
    return a - b;
  });
  var acc = 0;
  for (var i = 1; i < statues.length; i++) {
    acc += statues[i] - statues[i - 1] - 1;
  }
  return acc;
}
