function growingPlant(upSpeed, downSpeed, desiredHeight) {
  var currentHeight = 0;
  var time = 0;
  while (currentHeight < desiredHeight) {
    if (time > 0) {
      currentHeight -= downSpeed;
    }
    time += 1;
    currentHeight += upSpeed;
  }
  return time;
}
