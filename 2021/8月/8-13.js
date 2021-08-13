var maxSumDivThree = function (nums) {
  const stack = [
    [100000, 100000],
    [100000, 100000],
    [100000, 100000],
  ];
  let sum = 0;
  const replace = (list, v) => {
    if (v < list[0]) {
      [list[0], list[1]] = [v, list[0]];
    } else if (v < list[1]) {
      list[1] = v;
    }
  };
  for (const n of nums) {
    sum += n;
    replace(stack[n % 3], n);
  }

  if (!(sum % 3)) return sum;

  if (sum % 3 === 1) {
    let v = Math.min(stack[1][0], stack[2][0] + stack[2][1]);
    return v === Infinity ? 0 : sum - v;
  } else {
    let v = Math.min(stack[2][0], stack[1][0] + stack[1][1]);
    return v === Infinity ? 0 : sum - v;
  }
};
