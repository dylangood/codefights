function fileNaming(names) {
  var uniques = {};
  return names.map( name => {
    if (uniques[name] === undefined) {
      uniques[name] = true;
      return name;
    } else {
      var i = 1;
      var tryName = name + '(' + i + ')';
      while (uniques[tryName]) { 
        i++;
        tryName = name + '(' + i + ')';
      }
      uniques[tryName] = true;
      return tryName;
    }
  });
}
