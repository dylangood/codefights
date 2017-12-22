function evenDigitsOnly(n) {
  return n.toString().split('').reduce( (acc, digit) => {
    return acc && !(digit % 2);
  }, true);
}
