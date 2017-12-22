function deleteDigit(n) {
  var str = n.toString();
  var numbers = str.split('').map( (digit, i, arr) => {
    return arr.slice(0, i).concat(arr.slice(i + 1)).join('') * 1;
  });
  return Math.max(...numbers);
  
  // var leastDigit = Math.min(...str.split(''));
  // var index = str.indexOf(leastDigit);
  // return str.slice(0, index).concat(str.slice(index + 1)) * 1;
}
