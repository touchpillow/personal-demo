// var areOccurrencesEqual = function (s) {
//   const map = new Map();
//   for (const n of s) {
//     map.set(n, (map.get(n) || 0) + 1);
//   }
//   return new Set([...map.values()]).size === 1;
// };
// var getLucky = function (s, k) {
//   let res = [].reduce.call(
//     s,
//     (res, item) => {
//       return `${res}${item.charCodeAt() - 96}`;
//     },
//     ""
//   );
//   console.log(res);
//   const transform = (item) => {
//     if (item.length < 2) return item;
//     const sum = [].reduce.call(item, (sum, n) => sum + Number(n), 0);
//     return `${sum}`;
//   };
//   while (k--) {
//     res = transform(res);
//   }
//   return res;
// };
// console.log(getLucky("iiii", 1));
// var maximumSum = function (arr) {
//   const l = arr.length;
//   const dp = new Array(l).fill("").map(() => []);
//   dp[0] = [arr[0], 0];
//   let max = arr[0];
//   for (let i = 1; i < l; i++) {
//     dp[i][0] = Math.max(arr[i], dp[i - 1][0] + arr[i]);
//     dp[i][1] = Math.max(dp[i - 1][1] + arr[i], dp[i - 1][0]);
//     max = Math.max(max, ...dp[i]);
//   }
//   return max;
// };
var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  const l = s.length;
  const res = [];
  const dfs = (index = 0, pre = "") => {
    if (index === l) {
      if (pre) res.push(pre);
      return;
    }
    for (let i = index; i < l; i++) {
      const cur = s.slice(index, i + 1);
      if (!set.has(cur)) continue;
      dfs(i + 1, pre ? `${pre} ${cur}` : cur);
    }
  };
  dfs();
  return res;
};
