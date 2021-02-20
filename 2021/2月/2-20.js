// var minEatingSpeed = function (piles, H) {
//   const sum = piles.reduce((a, b) => a + b, 0);
//   if (H >= sum) return 1;
//   let left = 1;
//   let right = Math.max(...piles);

//   while (left < right) {
//     if (right - right === 1) break;
//     const middle = ~~((left + right) / 2);
//     const cur = piles.reduce((a, b) => a + Math.ceil(b / middl), 0);
//     if (cur <= H) {
//       right = middle;
//     } else {
//       left = middle;
//     }
//   }
//   return right;
// };
var stoneGame = function (piles) {
  const l = piles.length;
  const dp = piles.slice();
  for (let j = 1; j < l; j++) {
    for (let i = j - 1; i >= 0; i--) {
      dp[i] = Math.max(piles[i] - dp[i + 1], piles[j] - dp[j - 1]);
    }
  }
  return dp[l - 1] > 0;
};

const a = [
  20,
  36,
  11,
  5,
  15,
  44,
  4,
  20,
  44,
  10,
  12,
  20,
  30,
  4,
  5,
  3,
  2,
  4,
  30,
  10,
  20,
  43,
  9,
  22,
  39,
  42,
  48,
  14,
  13,
  40,
  48,
  15,
  11,
  25,
  9,
  31,
  50,
  21,
  18,
  37,
  45,
  14,
  36,
  40,
  11,
  17,
  17,
  7,
  24,
  6,
];
console.log(stoneGame(a));
