// var constructArray = function (n, k) {
//   const list = new Array(n);
//   for (let i = 0; i <= k; i++) {
//     if (!(i % 2)) {
//       list[i] = i / 2;
//     } else {
//       list[i] = k + 1 - (i - 1) / 2;
//     }
//   }
//   for (let i = k + 1; i <= n; i++) {
//     list[i] = i;
//   }
//   return list;
// };
var maximumSwap = function (num) {
  num = `${num}`.split("");
  const l = num.length;
  if (l < 2) return Number(num.join(""));
  const dp = new Array(l).fill(0);
  dp[l - 1] = l - 1;
  for (let i = l - 2; i >= 0; i--) {
    dp[i] = Number(num[i + 1]) > Number(num[dp[i + 1]]) ? i + 1 : dp[i + 1];
  }
  for (let i = 0; i < l - 1; i++) {
    if (Number(num[i]) < Number(num[dp[i]])) {
      [num[i], num[dp[i]]] = [num[dp[i]], num[i]];
      break;
    }
  }
  return Number(num.join(""));
};
console.log(maximumSwap(9973));
