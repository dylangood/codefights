function depositProfit(deposit, rate, threshold) {
  var year = 0;
  var balance = deposit;
  while (balance < threshold) {
    year += 1;
    balance += balance * rate / 100;
  }
  return year;
}
