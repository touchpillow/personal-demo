// var halvesAreAlike = function (s) {
//   s = s.toLowerCase();
//   const l = s.length;
//   const cl = 0;
//   const cr = 0;
//   const sl = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < l / 2; i++) {
//     if (sl.includes(s[i])) {
//       cl++;
//     }
//   }
//   for (let i = l / 2; i < l; i++) {
//     if (sl.includes(s[i])) {
//       cr++;
//     }
//   }
//   return cl === cr;
// };
var eatenApples = function (apples, days) {
  const l = apples.length;
  const list = [];
  for (let i = l - 1; i >= 0; i--) {
    const start = i + days[i];
    for (let j = start - 1, c = 0; j >= i && c < apples[i]; j--) {
      if (!list[j]) {
        c++;
        list[j] = true;
      }
    }
  }
  return list.filter((item) => item).length;
};
const apples = [
    9,
    10,
    1,
    7,
    0,
    2,
    1,
    4,
    1,
    7,
    0,
    11,
    0,
    11,
    0,
    0,
    9,
    11,
    11,
    2,
    0,
    5,
    5,
  ],
  days = [
    3,
    19,
    1,
    14,
    0,
    4,
    1,
    8,
    2,
    7,
    0,
    13,
    0,
    13,
    0,
    0,
    2,
    2,
    13,
    1,
    0,
    3,
    7,
  ];

console.log(eatenApples(apples, days));
// var findBall = function (grid) {
//   const h = grid.length;
//   if (!h) return [];
//   const w = grid[0].length;
//   const dfs = (i, j) => {
//     if (i === h) return j;
//     if (j === 0 && grid[i][j] === -1) return -1;
//     if (j === w - 1 && grid[i][j] === 1) return -1;
//     if (grid[i][j] === 1) {
//       if (grid[i][j + 1] === -1) return -1;
//       return dfs(i + 1, j + 1);
//     } else {
//       if (grid[i][j - 1] === 1) return -1;
//       return dfs(i + 1, j - 1);
//     }
//   };
//   const res = new Array(w).fill("").map((item, index) => {
//     return [0, index];
//   });
//   return res.map((item) => {
//     return dfs(item[0], item[1]);
//   });
// };
// const grid = [
//   [1, 1, 1, -1, -1],
//   [1, 1, 1, -1, -1],
//   [-1, -1, -1, 1, 1],
//   [1, 1, 1, 1, -1],
//   [-1, -1, -1, -1, -1],
// ];
// console.log(findBall(grid));
