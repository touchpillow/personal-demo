// var canIWin = function (maxChoosableInteger, desiredTotal) {
//   if (maxChoosableInteger >= desiredTotal) return true;
//   const sum = ((maxChoosableInteger + 1) * maxChoosableInteger) / 2;
//   if (desiredTotal > sum) return false;
//   const dp = [];
//   function f(total, state) {
//     // 有缓存
//     if (dp[state] !== undefined) return dp[state];

//     for (var i = 1; i <= maxChoosableInteger; i++) {
//       var curr = 1 << i;
//       // 已经抽过这个数
//       if (curr & state) continue;
//       // 直接获胜
//       if (i >= total) return (dp[state] = true);
//       // 可以让对方输
//       if (!f(total - i, state | curr)) return (dp[state] = true);
//     }

//     // 没有任何让对方输的方法
//     return (dp[state] = false);
//   }

//   return f(desiredTotal, 0);
// };

var findSubstringInWraproundString = function (p) {
  if (!p) return 0;
  const l = p.length;
  let left = 0;
  let right = 0;
  const map = {};
  while (right < l) {
    if (!map[p[right]]) {
      map[p[right]] = 1;
    }
    if (left == right) {
      right++;
      continue;
    }
    if (
      p[right].charCodeAt() - p[right - 1].charCodeAt() == 1 ||
      (p[right] == "a" && p[right - 1] == "z")
    ) {
      map[p[right]] = Math.max(map[p[right]], right - left + 1);
    } else {
      left = right;
    }
    right++;
  }
  return Object.values(map).reduce((a, b) => a + b);
};
const s = "cac";
console.log(findSubstringInWraproundString(s));
