// var minOperations = function (s) {
//   let c1 = 0,
//     c2 = 0;
//   let pre;
//   for (const v of s) {
//     if (v === pre) {
//       c1++;
//       pre = v === "0" ? "1" : "0";
//     } else {
//       pre = v;
//     }
//   }
//   pre = s[0];
//   for (const v of s) {
//     if (v === pre) {
//       c2++;
//       pre = v === "0" ? "1" : "0";
//     } else {
//       pre = v;
//     }
//   }
//   return Math.min(c1, c2);
// };
// console.log(minOperations("1111"));
// var countHomogenous = function (s) {
//   const mod = Math.pow(10, 9) + 7;
//   let left = 0,
//     right = 0;
//   let c = 0;
//   const l = s.length;
//   while (right < l) {
//     while (s[right] === s[left]) {
//       right++;
//     }
//     let d = right - left;
//     c += ((d * (1 + d)) / 2) % mod;
//     left = right;
//   }
//   return c;
// };
// console.log(countHomogenous("zzzzz"));
var minimumSize = function (nums, maxOperations) {
  let c = 1;
  let v = Math.max(...nums);
  while (c <= v) {
    const mid = ~~((c + v) / 2);
    let t = 0;
    for (const n of nums) {
      t += ~~((n - 1) / mid);
    }
    if (t <= maxOperations) {
      v = mid - 1;
    } else {
      c = mid + 1;
    }
  }
  return c;
};
var minTrioDegree = function (n, edges) {
  const dp = new Array(n + 1).fill("").map(() => new Array(n + 1).fill(false));
  const count = new Array(n + 1).fill(0);
  for (const [m, n] of edges) {
    dp[m][n] = true;
    dp[n][m] = true;
    count[m]++;
    count[n]++;
  }
  let min = n * n;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (!dp[i][j]) continue;
      for (let k = j + 1; k <= n; k++) {
        if (dp[i][k] && dp[j][k]) {
          min = Math.min(min, deg[i] + deg[j] + deg[k] - 6);
        }
      }
    }
  }
  return min === n * n ? -1 : min;
};
const n = 6,
  edges = [
    [1, 2],
    [1, 3],
    [3, 2],
    [4, 1],
    [5, 2],
    [3, 6],
  ];
console.log(minTrioDegree(n, edges));
