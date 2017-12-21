function almostIncreasingSequence(sequence) {
  var failsToIncrease = sequence => {
    for (var i = 1; i < sequence.length; i++) {
      if ( sequence[i] <= sequence[i - 1] ) {
        console.log('Failed at: ', i);
        return i;
      }
    }
    return false;
  };
  
  var fails = failsToIncrease(sequence);
  var temp = sequence.splice(fails - 1, 1);
  var copy = sequence.slice();
  copy.splice(fails - 1, 1, ...temp);
  return !fails || !failsToIncrease(sequence) || !failsToIncrease(copy);
}
