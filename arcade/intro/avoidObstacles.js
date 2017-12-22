function avoidObstacles(inputArray) {
  const maxJump = 41;
  for (var jump = 1; jump < maxJump; jump++) {
    if ( inputArray.reduce( (acc, num) => {
      console.log(acc, jump, num);
      return acc && !!(num % jump);
    }, true ) ) {
      return jump;
    }
  }
  return maxJump;
}
