// var reorderSpaces = function (text) {
//   //   const list = text.split("");
//   //   const l = list.filter((i) => i === " ").length;
//   let l = 0;
//   let word = [];
//   let temp = "";
//   for (const s of text) {
//     if (s != " ") {
//       temp += s;
//     } else {
//       l++;
//       if (temp.length) {
//         word.push(temp);
//         temp = "";
//       }
//     }
//   }
//   if (temp.length) {
//     word.push(temp);
//   }
//   const x = ~~(l / (word.length - 1));
//   if (word.length == 1) {
//     return word[0] + " ".repeat(l);
//   }
//   return word.join(" ".repeat(x)) + " ".repeat(l % (word.length - 1));
// };
// const text = "  a";
// console.log(reorderSpaces(text) == "a  ");
// var maxUniqueSplit = function (s) {
//   const search = (s, set) => {
//     let left = 0;
//     let right = 1;
//     const l = s.length;
//     while (right <= l) {
//       let item = s.slice(left, right);
//       while (set.has(item) && right <= l) {
//         right++;
//         item = s.slice(left, right);
//       }
//       let size = set.size;
//       set.add(item);
//       while (s[right + 1] == s[right]) {
//         size = Math.max(search(s.slice(right, new Set([...set()]))));
//       }
//       left = right;
//       right++;
//     }
//     return set.size;
//   };
// };
// const s = "gpaccacseleac";

// console.log(maxUniqueSplit(s));
// var maxProductPath = function (grid) {
//   const m = Math.pow(10, 9) + 7;
//   const h = grid.length;
//   const w = grid[0].length;
//   const res = new Array(h).fill("").map(() => new Array(w));
//   res[0][0] = [grid[0][0], grid[0][0]];
//   for (let i = 1; i < h; i++) {
//     res[i][0] = [res[i - 1][0][0] * grid[i][0], res[i - 1][0][0] * grid[i][0]];
//   }
//   for (let i = 1; i < w; i++) {
//     res[0][i] = [res[0][i - 1][0] * grid[0][i], res[0][i - 1][0] * grid[0][i]];
//   }
//   for (let i = 1; i < h; i++) {
//     for (let j = 1; j < w; j++) {
//       res[i][j] = new Array(2);
//       if (grid[i][j] == 0) {
//         res[i][j] = [0, 0];
//       } else if (grid[i][j] > 0) {
//         res[i][j][0] = Math.min(
//           res[i - 1][j][0] * grid[i][j],
//           res[i][j - 1][0] * grid[i][j]
//         );
//         res[i][j][1] = Math.max(
//           res[i - 1][j][1] * grid[i][j],
//           res[i][j - 1][1] * grid[i][j]
//         );
//       } else {
//         res[i][j][0] = Math.min(
//           res[i - 1][j][1] * grid[i][j],
//           res[i][j - 1][1] * grid[i][j]
//         );
//         res[i][j][1] = Math.max(
//           res[i - 1][j][0] * grid[i][j],
//           res[i][j - 1][0] * grid[i][j]
//         );
//       }
//     }
//   }
//   return res[h - 1][w - 1][1] < 0 ? -1 : res[h - 1][w - 1][1] % m;
// };
// const grid = [
//   [1, -1, 0, -3, 4, 3, -3, 3, -1, 3, 0, 0, -4, 2],
//   [2, -2, -3, -4, 0, -2, -3, 3, 1, 4, 1, -3, -1, -4],
//   [-4, 4, -4, -4, 2, -4, 3, 0, -2, -4, 3, 4, -1, 0],
//   [-3, 3, -4, -4, 3, 4, 4, 1, -1, -1, 0, 3, 4, 1],
//   [1, 3, -4, 2, 2, -3, 1, -3, -4, -4, -1, -4, -4, 4],
//   [1, 1, -1, 1, -1, -1, 3, -4, -1, 2, -2, 3, -4, 0],
//   [1, 0, 3, 3, 1, 4, 1, 1, -4, -1, -3, 4, -4, 4],
//   [4, 3, 2, 3, 0, -1, 2, -4, 1, 0, 0, 1, 3, 4],
//   [-4, 4, -4, -4, 2, -2, 2, -1, 0, -2, 2, 4, -2, -1],
//   [-2, 3, 4, -4, 3, 3, -2, -1, 0, -3, 4, -2, -1, -4],
//   [4, 3, 3, 3, -3, 1, 2, -4, -1, 4, -3, -3, 2, 0],
//   [3, 3, 0, 1, -4, -4, -3, 3, -2, -4, 2, 4, -3, 3],
//   [-3, 0, 1, 3, 0, 0, 0, -4, -1, 4, -1, -3, 1, 1],
//   [-1, 4, 0, -3, 1, -3, -1, 2, 1, -3, -1, -4, 4, 1],
// ];
// console.log(maxProductPath(grid));
// var calculate = function (s) {
//   const va = ["+", "-", "*", "/"];
//   const res = [];
//   let temp = "";
//   for (const n of s) {
//     if (va.includes(n)) {
//       res.push(temp);
//       res.push(n);
//       temp = "";
//     } else {
//       temp += n;
//     }
//   }
//   if (temp) {
//     res.push(temp);
//   }
//   const list = [];
//   for (let i = 0, l = res.length; i < l; i++) {
//     if (res[i] == "*" || res[i] == "/") {
//       const pre = list.pop();
//       if (res[i] == "*") {
//         list.push(pre * res[i + 1]);
//       } else {
//         list.push(~~(pre / res[i + 1]));
//       }
//       i++;
//     } else {
//       list.push(res[i]);
//     }
//   }
//   let v = +list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (list[i] == "+") {
//       v += +list[i + 1];
//       i++;
//     } else if (list[i] == "-") {
//       v -= list[i + 1];
//       i++;
//     }
//   }
//   return v;
// };
// console.log(calculate("3+2*2"));
// const getV = (n) => {
//   return ((n - 1) * n) / 2;
// };
// var numPairsDivisibleBy60 = function (time) {
//   const map = new Map();
//   for (const n of time) {
//     map.set(n % 60, (map.get(n % 60) || 0) + 1);
//   }
//   let count = 0;
//   for (const key of map.keys()) {
//     if (!key || key == 30) {
//       count += 2 * getV(map.get(key));
//     } else {
//       count += map.get(key) * map.get(60 - key);
//     }
//   }
//   return count / 2;
// };
// const a = [60, 60, 60];
// console.log(numPairsDivisibleBy60(a));
var canThreePartsEqualSum = function (A) {
  const l = A.length;
  for (let i = 1; i < l; i++) {
    A[i] = A[i - 1] + A[i];
  }
  if (A[l - 1] % 3) return false;
  let left = 0;
  while (left < l) {
    if (A[left] == A[l - 1] / 3) {
      break;
    }
    left++;
  }
  let right = l - 2;
  while (right > left) {
    if (A[right] == (2 * A[l - 1]) / 3) {
      break;
    }
    right--;
  }
  return right - left >= 1;
};
const a = [1, -1, 1, -1];

console.log(canThreePartsEqualSum(a));
