function isIPv4Address(inputString) {
  var nums = inputString.split('.');
  if (nums.length !== 4) { return false; }
  for (var i = 0; i < nums.length; i++) {
    if ( !(nums[i].length && 1 * nums[i] >= 0 && 1 * nums[i] <= 255) ) {
      return false;
    }
  }
  return true;
}
