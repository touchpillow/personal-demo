var closestDivisors = function (num) {
  let min = num;
  let res = [1, num + 1];
  const v = Math.sqrt(num + 2);
  for (let i = 1; i <= v; i++) {
    const v1 = (num + 1) / i;
    const v2 = (num + 2) / i;
    if (Number.isInteger(v1) && v1 - i < min) {
      res = [i, v1];
      min = v1 - i;
    }
    if (Number.isInteger(v2) && v2 - i < min) {
      res = [i, v2];
      min = v2 - i;
    }
  }
  return res;
};
console.log(closestDivisors(8));
