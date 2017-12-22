function boxBlur(image) {
  var averagePix = function (img, i, j) {
    var sum = 0;
    for (var x = i - 1; x <= i + 1; x++) {
      for (var y = j - 1; y <= j + 1; y++) {
        sum += img[x][y];
      }
    }
    return Math.floor(sum / 9);
  };
  var blurred = [];
  for (var i = 1; i < image.length - 1; i++) {
    var row = [];
    for (var j = 1; j < image[0].length - 1; j++) {
      row.push(averagePix(image, i, j));
    }
    blurred.push(row);
  }
  return blurred;
}
