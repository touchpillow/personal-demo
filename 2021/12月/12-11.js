var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
  let cur = 0;
  let max = 0;
  let c = 0;
  let res = -2;
  const l = customers.length;
  let i = 0;
  for (; i < l; i++) {
    const n = customers[i];
    cur += n;
    const v = Math.min(cur, 4);
    cur -= v;
    c += boardingCost * v - runningCost;
    if (c > max) {
      res = i;
      max = c;
    }
  }

  while (cur) {
    const v = Math.min(cur, 4);
    cur -= v;
    c += boardingCost * v - runningCost;
    if (c > max) {
      res = i;
      max = c;
    }
    i++;
  }
  return res + 1;
};
const customers = [10, 10, 6, 4, 7],
  boardingCost = 3,
  runningCost = 8;
console.log(minOperationsMaxProfit(customers, boardingCost, runningCost));
