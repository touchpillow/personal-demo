// var numberOfMatches = function (n) {
//   let c = 0;
//   while (n > 1) {
//     if (n % 2) {
//       c += (n - 1) / 2;
//       n = (n + 1) / 2;
//     } else {
//       c += n / 2;
//       n /= 2;
//     }
//   }
//   return c;
// };
// console.log(numberOfMatches(7));
// var minPartitions = function (n) {
//   const s = `${n}`;
//   const list = [...s].map((item) => Number(item));
//   return Math.max(...list);
// };
// console.log(minPartitions(27346209830709182346));
var stoneGameVII = function (stones) {
  const l = stones.length;
  const left = new Array(l).fill(0);
  const right = new Array(l).fill(0);
  const sum = stones.reduce((a, b) => a + b);
  left[0] = stones[0];
  right[l - 1] = stones[l - 1];
  for (let i = 1; i < l; i++) {
    left[i] = stones[i] + left[i - 1];
    right[l - 1 - i] = right[l - i] + stones[l - 1 - i];
  }
  const dp = new Array(l).fill(0);

  for (let i = l - 2; i >= 0; i--) {
    for (let j = i + 1; j < l; j++) {
      dp[j] = Math.max(
        sum - left[i] - (right[j + 1] || 0) - dp[j],
        sum - (left[i - 1] || 0) - right[j] - dp[j - 1]
      );
    }
  }
  return dp[l - 1];
};
// const stones = [7, 90, 5, 1, 100, 10, 10, 2];
// console.log(stoneGameVII(stones));
var maxHeight = function (cuboids) {
  const l = cuboids.length;
  cuboids.forEach((item) => {
    item.sort((a, b) => a - b);
  });

  cuboids.sort((a, b) => {
    if (a[0] + a[1] + a[2] !== b[0] + b[1] + b[2])
      return b[0] + b[1] + b[2] - a[0] - a[1] - a[2];
    return b[2] - a[2];
  });
  const dp = new Array(l).fill(0);
  dp[0] = cuboids[0][2];
  for (let i = 1; i < l; i++) {
    dp[i] = cuboids[i][2];
    for (let j = i - 1; j >= 0; j--) {
      if (cuboids[j][2] < cuboids[i][2]) continue;
      if (cuboids[j][0] >= cuboids[i][0] && cuboids[j][1] >= cuboids[i][1]) {
        dp[i] = Math.max(dp[i], dp[j] + cuboids[i][2]);
      } else if (
        cuboids[j][0] >= cuboids[i][1] &&
        cuboids[j][1] >= cuboids[i][0]
      ) {
        dp[i] = Math.max(dp[i], dp[j] + cuboids[i][2]);
      }
    }
  }
  return Math.max(...dp);
};
const cuboids = [
  [1, 7, 20],
  [2, 6, 20],
];
console.log(maxHeight(cuboids));
