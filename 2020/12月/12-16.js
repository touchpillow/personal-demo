// var largestValues = function (root) {
//   const res = [];
//   const search = (root, level = 0) => {
//     if (!root) return;
//     if (res[level] === undefined) {
//       res[level] = root.val;
//     } else if (root.val > res[level]) {
//       res[level] = root.val;
//     }
//     search(root.left, level + 1);
//     search(root.right, level + 1);
//   };
//   search(root);
//   return res;
// };
var longestPalindromeSubseq = function (s) {
  const len = s.length;
  if (len < 2) {
    return len;
  }

  const dp = new Array(len).fill(1);
  let max = 0;
  for (let i = 1; i < len; i++) {
    max = 0;
    for (let j = i - 1; j >= 0; j--) {
      const tmp = dp[j];
      if (s[i] === s[j]) {
        dp[j] = max + 2;
      }
      max = Math.max(tmp, max);
    }
  }

  for (let i = 0; i < len; i++) {
    max = Math.max(max, ...dp);
  }
  console.log(dp);
  return Math.max(...dp);
};
const s = "abba";
console.log(longestPalindromeSubseq(s));
// var longestPalindromeSubseq = function (s) {
//   const l = s.length;
//   if (!l) return 0;
//   if (l == 1) return 1;
//   const dp = new Array(l).fill(1);
//   for (let i = 0; i < l; i++) {
//     dp[i][i] = 1;
//   }
//   let pre = 0;
//   for (let i = 1; i < l; i++) {
//     if (s[i] == s[i - 1]) {
//       dp[pre][i] = i - pre + 1;
//     } else {
//       pre = i;
//     }
//   }
//   for (let i = l - 2; i >= 0; i--) {
//     for (let j = i + 1; j < l; j++) {
//       dp[j] = Math.max(dp[j], dp[j - 1]);
//       if (s[i] === s[j]) {
//         if (j - i == 1) {
//           dp[j] = 2;
//         } else if (j - i == 2) {
//           dp[j] = 3;
//         } else {
//           dp[j] = Math.max(dp[i][j], dp[i + 1][j - 1] + 2);
//         }
//       }
//     }
//   }
//   console.log(dp);
//   return dp[0][l - 1];
// };
// const s = "bbbab";
// console.log(longestPalindromeSubseq(s));
