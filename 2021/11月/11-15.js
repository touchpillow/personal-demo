var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.unshift(0);
  horizontalCuts.push(h);
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.unshift(0);
  verticalCuts.push(w);
  verticalCuts.sort((a, b) => a - b);
  const l1 = horizontalCuts.length;
  const l2 = verticalCuts.length;
  let max1 = 0;
  let max2 = 0;
  for (let i = 1; i < l1; i++) {
    max1 = Math.max(max1, horizontalCuts[i] - horizontalCuts[i - 1]);
  }
  for (let i = 1; i < l2; i++) {
    max2 = Math.max(max2, verticalCuts[i] - verticalCuts[i - 1]);
  }
  const mod = Math.pow(10, 9) + 7;
  const res = (BigInt(max1) * BigInt(max2)) % BigInt(mod);
  return Number(res);
};
