// var expressiveWords = function (S, words) {
//   const l = S.length;
//   return words.filter((item) => {
//     const s1 = item.length;
//     if (s1 >= l) return false;
//     let i1 = 0,
//       i2 = 0;
//     let l1, l2;
//     while (i1 < l && i2 < s1) {
//       l1 = 1;
//       l2 = 1;
//       if (S[i1] !== item[i2]) return false;
//       while (S[i1] === S[i1 + 1]) {
//         i1++;
//         l1++;
//       }
//       while (item[i2] === item[i2 + 1]) {
//         i2++;
//         l2++;
//       }
//       if (l2 > l1) return false;
//       if (l1 !== l2 && l1 === 2) return false;
//       i1++;
//       i2++;
//       continue;
//     }
//     if (i1 !== l || i2 !== s1) return false;
//     return true;
//   }).length;
// };
// const S = "heeellooo";
// words = ["hello", "hi", "helo"];
// console.log(expressiveWords(S, words));
var largestSumOfAverages = function (A, K) {
  const l = A.length;
  const sum = new Array(l).fill(0);
  sum[0] = A[0];
  for (let i = 1; i < l; i++) {
    sum[i] = sum[i - 1] + A[i];
  }
  const dp = new Array(K + 1).fill("").map(() => new Array(l).fill(0));
  for (let i = 0; i < l; i++) {
    dp[1][i] = sum[i] / (i + 1);
  }
  for (let i = 1; i <= K; i++) {
    dp[i][i - 1] = sum[i - 1];
  }
  for (let i = 2; i <= K; i++) {
    for (let j = i; j < l; j++) {
      for (let m = j - 1; m >= i - 2; m--) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i - 1][m] + (sum[j] - sum[m]) / (j - m)
        );
      }
    }
  }
  return dp[K][l - 1];
};
const a = [9, 1, 2, 3, 9],
  k = 3;
console.log(largestSumOfAverages(a, k));
