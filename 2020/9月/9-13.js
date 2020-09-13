// var numSpecial = function (mat) {
//   const h = mat.length;
//   const w = mat[0].length;
//   let count = 0;
//   const deps = (row, column) => {
//     for (let i = 0; i < w; i++) {
//       if (mat[row][i] == 1 && i !== column) return false;
//     }
//     for (let i = 0; i < h; i++) {
//       if (mat[i][column] == 1 && i !== row) return false;
//     }
//     return true;
//   };
//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       if (mat[i][j] == 1) {
//         let flag = deps(i, j);
//         if (flag) {
//           count++;
//           break;
//         }
//       }
//     }
//   }
//   return count;
// };
// const a = [
//   [0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0],
//   [0, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 1],
// ];
// console.log(numSpecial(a));
// var unhappyFriends = function (n, preferences, pairs) {
//   let count = new Set();
//   const map = new Map();
//   for (let i = 0; i < n; i++) {
//     const v = new Map();
//     map.set(i, v);
//     for (let j = 0; j < n - 1; j++) {
//       v.set(preferences[i][j], n - j);
//     }
//   }
//   const getA = (x, y) => {
//     return map.get(x).get(y);
//   };
//   for (let i = 0; i < n / 2 - 1; i++) {
//     for (let j = i + 1; j < n / 2; j++) {
//       const [x, y] = pairs[i];
//       const [u, v] = pairs[j];
//       if (!count.has(x) || !count.has(u)) {
//         if (getA(x, u) > getA(x, y) && getA(u, x) > getA(u, v)) {
//           count.add(x);
//           count.add(u);
//         }
//       }
//       if (!count.has(x) || !count.has(v)) {
//         if (getA(x, v) > getA(x, y) && getA(v, x) > getA(v, u)) {
//           count.add(x);
//           count.add(v);
//         }
//       }
//       if (!count.has(y) || !count.has(v)) {
//         if (getA(y, v) > getA(y, x) && getA(v, y) > getA(v, u)) {
//           count.add(y);
//           count.add(v);
//         }
//       }
//       if (!count.has(y) || !count.has(u)) {
//         if (getA(y, u) > getA(y, x) && getA(u, y) > getA(u, v)) {
//           count.add(y);
//           count.add(u);
//         }
//       }
//     }
//   }
//   return count.size;
// };
// const n = 4,
//   preferences = [
//     [1, 3, 2],
//     [2, 3, 0],
//     [1, 3, 0],
//     [0, 2, 1],
//   ],
//   pairs = [
//     [1, 3],
//     [0, 2],
//   ];
// console.log(unhappyFriends(n, preferences, pairs));
var minCostConnectPoints = function (points) {
  const l = points.length;
  let res = 0;
  if (l < 2) return res;
  const getDis = (a, b) => {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  };
  const list = [points[0]];
  points.shift();
  while (points.length) {
    const le = points.length;
    let index;
    let v = Infinity;
    for (let i = 0; i < le; i++) {
      for (const item of list) {
        const curDis = getDis(points[i], item);
        if (curDis < v) {
          index = i;
          v = curDis;
        }
      }
    }
    list.push(points.splice(index, 1)[0]);
    console.log(list);
    res += v;
  }
  return res;
};
const points = [
  [7, 18],
  [-15, 19],
  [-18, -15],
  [-7, 14],
  [4, 1],
  [-6, 3],
];
console.log(minCostConnectPoints(points));
