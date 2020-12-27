// var checkInclusion = function (s1, s2) {
//   const map = new Map();
//   const l = s1.length;
//   for (const s of s1) {
//     map.set(s, (map.get(s) || 0) + 1);
//   }
//   const map2 = new Map();
//   for (let i = 0; i < l; i++) {
//     map2.set(s2[i], (map2.get(s2[i]) || 0) + 1);
//   }
//   let right = l - 1;
//   const l2 = s2.length;
//   const keys = map.keys();
//   let flag = true;
//   for (const key of keys) {
//     if (map.get(key) !== map2.get(key)) {
//       flag = false;
//       break;
//     }
//   }
//   if (flag) return true;
//   while (right < l2) {
//     right++;
//     const keyLeft = s2[right - l];
//     const keyRight = s2[right];
//     map2.set(keyLeft, (map2.get(keyLeft) || 0) - 1);
//     map2.set(keyRight, (map2.get(keyRight) || 0) + 1);
//     let flag = true;
//     const keys = map.keys();
//     for (const key of keys) {
//       if (map.get(key) !== map2.get(key)) {
//         flag = false;
//         break;
//       }
//     }
//     console.log(map2, map);
//     if (flag) return true;
//   }
//   return false;
// };
// const s1 = "ab",
//   s2 = "eidboaoo";
// console.log(checkInclusion(s1, s2));
var findPaths = function (m, n, N, i, j) {
  const mod = Math.pow(10, 9) + 7;
  const grid = new Array(m)
    .fill("")
    .map(() => new Array(n).fill("").map(() => ({})));
  grid[0][0][1] = 2;
  grid[m - 1][n - 1][1] = 2;
  grid[0][n - 1][1] = 2;
  grid[m - 1][0][1] = 2;
  for (let i = 1; i < n - 1; i++) {
    grid[0][i][1] = 1;
    grid[m - 1][i][1] = 1;
  }
  for (let i = 1; i < m - 1; i++) {
    grid[i][0][1] = 1;
    grid[i][n - 1][1] = 1;
  }
  if (m === 1) {
    for (let i = 0; i < n; i++) {
      grid[0][i][1]++;
    }
  }
  if (n === 1) {
    for (let i = 0; i < m; i++) {
      grid[i][0][1]++;
    }
  }
  const dfs = (i, j, N) => {
    if (N < 0) return 0;
    if (i < 0 || i >= m) return 1;
    if (j < 0 || j >= n) return 1;
    if (grid[i][j][N] !== undefined) {
      return grid[i][j][N];
    }
    grid[i][j][N] =
      (dfs(i - 1, j, N - 1) +
        dfs(i + 1, j, N - 1) +
        dfs(i, j - 1, N - 1) +
        dfs(i, j + 1, N - 1)) %
      mod;
    return grid[i][j][N];
  };

  return dfs(i, j, N);
};
const m = 1,
  n = 3,
  N = 3,
  i = 0,
  j = 1;
console.log(findPaths(m, n, N, i, j));
