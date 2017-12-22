function absoluteValuesSumMinimization(a) {
  const absoluteValuesSum = value => {
    return a.reduce( (acc, num) => {
      return acc + Math.abs(num - value);
    }, 0 );
  };
  var values = a.map( value => absoluteValuesSum(value));
  return a[values.indexOf(Math.min(...values))];
}
