// var advantageCount = function (A, B) {
//   const dp = A.map((item, index) => [item, index]).sort((a, b) => a[0] - b[0]);
//   A.sort((a, b) => a - b);
//   let left = [];
//   const right = [];
//   let i = 0;
//   while (A.length) {
//     if (A[0] > dp[i][0]) {
//       left.push(A.shift());
//       i++;
//     } else {
//       right.push(A.shift());
//     }
//   }
//   left = left.concat(right);
//   dp.forEach((item, index) => {
//     item[0] = left[index];
//   });
//   return dp.sort((a, b) => a[1] - b[1]).map((item) => item[0]);
// };
var lenLongestFibSubseq = function (arr) {
  const l = arr.length;
  const map = arr.reduce((map, item, index) => {
    map.set(item, index);
    return map;
  }, new Map());
  const dp = new Array(l).fill("").map(() => new Array(l).fill(1));
  let max = 0;
  for (let i = 1; i < l; i++) {
    for (let j = 0; j < i; j++) {
      if (map.has(arr[i] + arr[j])) {
        const v = map.get(arr[i] + arr[j]);
        dp[i][v] = Math.max(dp[j][i] + 1, dp[i][v]);
        max = Math.max(dp[i][v] + 1, max);
      }
    }
  }
  return max >= 3 ? max : 0;
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(lenLongestFibSubseq(arr));
