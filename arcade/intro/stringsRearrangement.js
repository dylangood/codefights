function stringsRearrangement(inputArray) {
  
  var strDiffFilter = (str, num, comp) => {
    return num === str.split('').reduce( (acc, char, i) => {
      return acc + ( char === comp[i] ? 0 : 1 );
    }, 0);
  };
  
  Array.prototype.without = function(index) {
    return this.slice(0, index).concat(this.slice(index + 1));
  };
   
  var sequenceUnusedStrs = function(str, remainders) {
    var oneStepFrom = target => strDiffFilter(target, 1, str);
    var options = remainders.filter( target => oneStepFrom(target) );
    if (options.length === 0) {
      return false;
    } else {
      return options.reduce( (acc, option) => {
        var m = remainders.indexOf(option);
        var newRemainders = remainders.without(m);
        if (newRemainders.length === 0) {
          return true;
        } else {
          return acc || sequenceUnusedStrs(option, newRemainders);
        }
      }, false);
    }
  };
  
  return inputArray.some( (str, i, inpArr) => {
    var trunkRemainders = inpArr.without(i);
    return sequenceUnusedStrs(str, trunkRemainders);
  });

}
