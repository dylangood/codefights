function rotateImage(a) {
  const last = a.length - 1;
  var temp1 = null;
  var temp2 = null;
  var source = {};
  
  var storeAndMoveTo = (destin) => {
    temp2 = a[destin.x][destin.y];
    a[destin.x][destin.y] = temp1;
    temp1 = temp2;
    source = destin;
  };
  
  var diamondRotate = (x, y) => {
    var x2 = last - x;
    var y2 = last - y;
    temp1 = a[x][y];
    source = {x, y};
    storeAndMoveTo({x: y, y: x2});
    storeAndMoveTo({x: x2, y: y2});
    storeAndMoveTo({x: y2, y: x});
    storeAndMoveTo({x: x, y: y});
  };
  
  for (var i = 0; i < last / 2; i++) {
    for (var j = i; j < last - i; j++) {
      diamondRotate(i, j);
    }
  }
  return a;
}
