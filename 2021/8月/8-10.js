var minRemoveToMakeValid = function (s) {
  let c = 0;
  const l = s.length;
  const dp = new Array(l).fill(true);
  for (let i = 0; i < l; i++) {
    const n = s[i];
    if (n === "(") {
      c++;
    } else if (n === ")") {
      c--;
      if (c < 0) {
        c = 0;
        dp[i] = false;
        continue;
      }
    } else {
    }
  }
  let right = l - 1;
  while (c--) {
    while (!dp[right] || s[right] !== "(") {
      right--;
    }
    dp[right] = false;
  }
  return dp.reduce((pre, item, index) => `${pre}${item ? s[index] : ""}`);
};
