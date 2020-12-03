// var fourSumCount = function (A, B, C, D) {
//   const l = A.length;
//   const map1 = new Map();
//   const map2 = new Map();
//   for (let i = 0; i < l; i++) {
//     for (let j = 0; j < l; j++) {
//       map1.set(A[i] + B[j], (map1.get(A[i] + B[j]) || 0) + 1);
//       map2.set(C[i] + D[j], (map2.get(C[i] + D[j]) || 0) + 1);
//     }
//   }
//   let c = 0;
//   for (const key of map1.keys()) {
//     c += map1.get(key) * (map2.get(-1 * key) || 0);
//   }
//   return c;
// };
// var floodFill = function (image, sr, sc, newColor) {
//   const h = image.length;
//   if (!h) return image;
//   const w = image[0].length;
//   const color = image[sr][sc];
//   if (color == newColor) return image;
//   const dfs = (i, j) => {
//     if (i < 0 || i >= h) return;
//     if (j < 0 || j >= w) return;
//     if (image[i][j] !== color) return;
//     image[i][j] = newColor;
//     dfs(i - 1, j);
//     dfs(i + 1, j);
//     dfs(i, j - 1);
//     dfs(i, j + 1);
//   };
//   dfs(sr, sc);
//   return image;
// };
var merge = function (A, m, B, n) {
  let left = 0,
    right = 0;
  while (right < n) {
    while (A[left] < B[right] && left < m + right) {
      left++;
    }
    A.splice(left, 0, B[right]);
    left++;
    right++;
  }
  return A;
};
