function addBorder(picture) {
  var framedPicture = picture.map( line => {
    return '*'.concat(line, '*');
  });
  var width = framedPicture[0].length;
  var border = '';
  for (var i = 0; i < width; i++) {
    border += '*';
  }
  framedPicture.unshift(border);
  framedPicture.push(border);
  return framedPicture;
}
