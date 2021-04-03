// var maxSumAfterPartitioning = function (arr, k) {
//   const l = arr.length;
//   const dp = new Array(k + 1).fill(0).map(() => new Array(l + 1).fill(0));
//   dp[1][1] = arr[0];
//   for (let i = 2; i <= l; i++) {
//     dp[1][i] = dp[1][i - 1] + arr[i - 1];
//   }
//   for (let i = 2; i <= k; i++) {
//     dp[i][1] = arr[0];
//     for (let j = 2; j <= l; j++) {
//       let max = 0;
//       for (let m = 1; m <= k && j - m >= 0; m++) {
//         max = Math.max(max, arr[j - m]);
//         dp[i][j] = Math.max(dp[i][j], dp[i][j - m] + max * m);
//       }
//     }
//   }
//   return dp[k][l];
// };
// const arr = [1, 15, 7, 9, 2, 5, 10],
//   k = 3;
// console.log(maxSumAfterPartitioning(arr, k));
// var maxSumAfterPartitioning = function (arr, k) {
//   const l = arr.length;
//   const dp = new Array(l + 1).fill(0);
//   for (let i = 1; i <= l; i++) {
//     let max = 0;
//     for (let j = i - 1; i - j <= k && j >= 0; j--) {
//       max = Math.max(max, arr[j]);
//       dp[i] = Math.max(dp[i], dp[j] + (i - j) * max);
//     }
//   }
//   return dp[l];
// };
// const isS = (s1, s2) => {
//   const l = s2.length;
//   for (let i = 0; i < l; i++) {
//     if (s2.slice(0, i) + s2.slice(i + 1) === s1) return true;
//   }
//   return false;
// };
// var longestStrChain = function (words) {
//   const l = words.length;
//   const deep = words.slice().fill(1);
//   const nextS = words.slice();
//   const dp = new Array(17).fill("").map(() => []);
//   for (let i = 0; i < l; i++) {
//     dp[words[i].length].push(i);
//   }
//   for (let i = 1; i < 16; i++) {
//     const next = dp[i + 1];
//     const current = dp[i];
//     for (const cur of current) {
//       const nextIndex = next.filter((item) => isS(words[cur], words[item]));
//       nextS[cur] = nextIndex;
//     }
//   }
//   for (let i = 1; i < 16; i++) {
//     dp[i].forEach((item) => {
//       const next = nextS[item];
//       next.forEach((n) => {
//         deep[n] = Math.max(deep[n], deep[item] + 1);
//       });
//     });
//   }
//   return Math.max(...deep);
// };
// const a = ["a", "b", "ba", "bca", "bda", "bdca"];
// console.log(longestStrChain(a));
// var lastStoneWeightII = function (stones) {
//   //   stones.sort((a, b) => a - b);
//   const l = stones.length;
//   const sum = stones.reduce((a, b) => a + b, 0);
//   const max = ~~(sum / 2);
//   const dp = new Array(max + 1).fill(0);
//   for (let i = 1; i <= l; i++) {
//     for (let j = max; j >= 0; j--) {
//       if (stones[i - 1] > j) {
//         continue;
//       } else {
//         dp[j] = Math.max(dp[j], stones[i - 1] + dp[j - stones[i - 1]]);
//       }
//     }
//   }
//   return sum - 2 * dp[max];
// };
// const a = [6, 2, 2, 6, 5, 7, 7];
// // const a = [2, 7, 4, 1, 8, 1];
// console.log(lastStoneWeightII(a));
// i-1 ->  i
// i-1 //
// i-k   //1-k
var maxSumAfterPartitioning = function (arr, k) {
  const l = arr.length;
  const dp = new Array(l + 1).fill(0);
  // [1,2,3,  4,5] l  - j
  // ....i个元素   dp[i - j]  + j*max      j= 1/2/3/k
  for (let i = 1; i <= l; i++) {
    let max = 0;
    for (let j = 1; j <= k && i - j >= 0; j++) {
      max = Math.max(max, arr[i - j]);
      dp[i] = Math.max(dp[i], dp[i - j] + max * j);
    }
  }
};
// if (checkUser() == true) {
//   console.log("账号OK");
//   if (checkPassword() == true) {
//     console.log("密码OK");
//     return 1;
//   } else {
//     console.log("账号error");
//     return 2;
//   }
// } else {
//   console.log("账号error");
// }
