/**
 * 1314. 矩阵区域和
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSumError = function (mat, K) {
  const m = mat.length,
    n = mat[0].length;
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let answer = new Array(m).fill(0).map(() => new Array(n).fill(0));

  dp[0][0] = mat[0][0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] =
        (dp?.[i - 1]?.[j] ?? 0) +
        (dp[i]?.[j - 1] ?? 0) -
        (dp?.[i - 1]?.[j - 1] ?? 0) +
        mat[i][j];
    }
  }
  const getSum = (i, j) => {
    if (i < 0 || j < 0) return 0;
    return dp[Math.min(i, m - 1)][Math.min(n - 1, j)];
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      answer[i][j] =
        getSum(i + K, j + K) +
        getSum(i - K - 1, j - K - 1) -
        getSum(i + K, j - K - 1) -
        getSum(i - K - 1, j + K);
    }
  }
  return answer;
};
const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrixBlockSumError(mat, 1));
