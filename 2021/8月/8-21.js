var removeCoveredIntervals = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return b[1] - a[1];
  });
  let c = 0;
  let start = -Infinity;
  for (const [s, e] of intervals) {
    if (e >= start) {
      c++;
      start = e;
    }
  }
  return c;
};
// const calcFactorial = (v) => {
//   const cache = new Map([0, 0], [1, 1]);
//   if (cache.has(v)) return map.get(v);
//   const max = Math.max(...cache.keys());
//   for (let i = max + 1; i <= v; i++) {
//     cache.set(map.get(i - 1) * i);
//   }
//   return cache.get(v);
// };
//根据例子，3+2和 2+3是两种结果，说明不同值之间和顺序有关
const calcCount = (n, m = 2) => {
  if (n < m) return 0;
  let res = 0;
  // dp[i][j]表示j个球分为i组
  const dp = new Array(n + 1).fill("").map(() => new Array(n + 1).fill(0));
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
    dp[1][i] = 1;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let c = 0;
      for (let k = 0; k <= j; k++) {
        c += dp[i - 1][k];
      }
      dp[i][j] = c;
    }
  }
  for (let i = 1; i * m <= n; i++) {
    //i表示能分多少组
    //原问题转化为 v个球分为i组，考虑顺序的问题
    const v = n - m * i;
    res += dp[i][v];
  }
  return res;
};
console.log(calcCount(5, 1));

// 5
// 3+2  2+3 1+4 4+1
// 1+ 3+ 1  1+1+3  3+1+1 2+2+1 2+1+2 1+2+2
// 1+1+1+2  1+2+1+1 1+1+2+1 2+1+1+1
// 11111
// 1 + 4 + 6 + 4 + 1
// dp问题 const calcCount = (n, m = 2) => { if (n new Array(n + 1).fill(0)); for (let i = 0; i <= n; i++) { dp[i][0] = 1; dp[1][i] = 1; } for (let i = 1; i <= n; i++) { for (let j = 1; j <= n; j++) { let c = 0; for (let k = 0; k <= j; k++) { c += dp[i - 1][k]; } dp[i][j] = c; } } for (let i = 1; i * m <= n; i++) { //i表示能分多少组 //原问题转化为 v个球分为i组，考虑顺序的问题 const v = n - m * i; res += dp[i][v]; } return res; };
