function electionsWinners(v, k) {
  v.sort( (a, b) => {
    return b - a;
  });
  var winners = v.findIndex( (c, i, tallies) => {
    return i ? c + k <= tallies[0] : k === 0 && c === tallies[1];
  });
  return winners < 0 ? v.length : winners;
}
