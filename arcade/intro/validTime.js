function validTime(time) {
  var chunks = time.split(':');
  if (chunks[0] >= 24 || chunks[0] < 0) {return false;}
  if (chunks[1] >= 60 || chunks[1] < 0) {return false;}
  return true;
}
