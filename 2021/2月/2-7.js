// var numFactoredBinaryTrees = function (arr) {
//   const l = arr.length;
//   const mod = Math.pow(10, 9) + 7;
//   arr.sort((a, b) => a - b);
//   const dp = new Array(l).fill(1);
//   const map = new Map();
//   for (let i = 0; i < l; i++) {
//     map.set(arr[i], i);
//   }
//   const res = [];
//   for (let i = 0; i < l; i++) {
//     for (let j = i; j < l; j++) {
//       const sum = arr[i] * arr[j];
//       if (map.has(sum)) {
//         res.push([i, j]);
//       }
//     }
//   }
//   res.sort((a, b) => arr[a[0]] * arr[a[1]] - arr[b[0]] * arr[b[1]]);
//   for (const [a, b] of res) {
//     const target = arr[a] * arr[b];
//     if (a === b) {
//       dp[map.get(target)] = dp[map.get(target)] + dp[a] * dp[b];
//     } else {
//       dp[map.get(target)] = dp[map.get(target)] + 2 * dp[a] * dp[b];
//     }
//   }
//   console.log(dp);
//   return dp.reduce((a, b) => (a + b) % mod);
// };

// console.log(numFactoredBinaryTrees(A));
var flipgame = function (fronts, backs) {
  const l = fronts.length;
  const nums = [];
  const set = new Set();
  for (let i = 0; i < l; i++) {
    if (fronts[i] !== backs[i]) {
      nums.push(fronts[i], backs[i]);
    } else {
      set.add(fronts[i]);
    }
  }
  const list = nums.filter((item) => !set.has(item));
  return list.length ? Math.min(...list) : 0;
};
