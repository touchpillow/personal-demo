var maxSatisfied = function (customers, grumpy, X) {
  let c = 0;
  let l = customers.length;
  for (let i = 0; i < l; i++) {
    if (!grumpy[i]) {
      c += customers[i];
    }
  }

  let cur = 0;
  for (let i = 0; i < X; i++) {
    if (grumpy[i]) {
      cur += customers[i];
    }
  }
  let max = cur;
  for (let i = X; i < l; i++) {
    if (grumpy[i - X]) {
      cur -= customers[i - X];
    }
    if (grumpy[i]) {
      cur += customers[i];
    }
    max = Math.max(max, cur);
  }
  return c + max;
};
