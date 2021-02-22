// var spiralMatrixIII = function (R, C, r0, c0) {
//   let flag = 0;
//   let res = [[r0, c0]];
//   let popsition = new Set([
//     `0-${C - 1}`,
//     `0-0`,
//     `${R - 1}-0`,
//     `${R - 1}-${C - 1}`,
//   ]);
//   console.log(popsition);
//   let c = popsition.has(`${r0}-${c0}`) ? 1 : 0;
//   let i = r0,
//     j = c0;
//   let l = 0;
//   while (c < popsition.size) {
//     let cur = ~~(l / 2) + 1;
//     l++;
//     console.log(cur, i, j, c);
//     if (l > 100) return;
//     if (flag === 0) {
//       while (cur--) {
//         j++;
//         res.push([i, j]);
//         if (popsition.has(`${i}-${j}`)) {
//           c++;
//         }
//       }
//       flag = 1;
//     } else if (flag === 1) {
//       while (cur--) {
//         i++;
//         res.push([i, j]);
//         if (popsition.has(`${i}-${j}`)) {
//           c++;
//         }
//       }
//       flag = 2;
//     } else if (flag === 2) {
//       while (cur--) {
//         j--;
//         res.push([i, j]);
//         if (popsition.has(`${i}-${j}`)) {
//           c++;
//         }
//       }
//       flag = 3;
//     } else {
//       while (cur--) {
//         i--;
//         res.push([i, j]);
//         if (popsition.has(`${i}-${j}`)) {
//           c++;
//         }
//       }
//       flag = 0;
//     }
//   }
//   return res.filter(
//     (item) => item[0] >= 0 && item[0] < R && item[1] >= 0 && item[1] < C
//   );
// };
// console.log(spiralMatrixIII(5, 6, 1, 4));
var possibleBipartition = function (N, dislikes) {
  const dp = new Array(N).fill(0);
  const map = new Map();
  for (const [a, b] of dislikes) {
    if (!map.get(a - 1)) {
      map.set(a - 1, []);
    }
    if (!map.get(b - 1)) {
      map.set(b - 1, []);
    }
    map.get(a - 1).push(b - 1);
    map.get(b - 1).push(a - 1);
  }
  const dfs = (i, v) => {
    if (dp[i]) {
      if (dp[i] !== v) {
        dp[i] = 3;
      }
      return;
    } else {
      dp[i] = v;
      const next = map.get(i);
      next.forEach((item) => {
        dfs(item, v === 1 ? 2 : 1);
      });
    }
  };
  for (let i = 0; i < N; i++) {
    if (dp[i]) continue;
    dfs(i, 1);
  }
  return dp.every((item) => item !== 3);
};
const N = 4,
  dislikes = [
    [1, 2],
    [1, 3],
    [2, 4],
  ];

console.log(possibleBipartition(N, dislikes));
