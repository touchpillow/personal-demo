// var selfDividingNumbers = function (left, right) {
//   const res = [];
//   for (let i = left; i <= right; i++) {
//     if (validate(i)) res.push(i);
//   }
//   function validate(v) {
//     for (const s of `${v}`) {
//       if (s == "0") return false;
//       if (v % +s) return false;
//     }
//     return true;
//   }
//   return res;
// };
// var floodFill = function (image, sr, sc, newColor) {
//   const v = image[sr][sc];
//   const h = image.length;
//   const w = image[0].length;
//   function fillColor(i, j, v) {
//     if (i < 0 || i >= h) return;
//     if (j < 0 || j >= w) return;
//     if (image[i][j] !== v) return;
//     image[i][j] = "*";
//     fillColor(i - 1, j);
//     fillColor(i + 1, j);
//     fillColor(i, j - 1);
//     fillColor(i, j + 1);
//   }
//   fillColor(sr, sc, v);
//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       if (image[i][j] === "*") image[i][j] = newColor;
//     }
//   }
//   return image;
// };
var canCompleteCircuit = function (gas, cost) {
  const l = gas.length;
  const list = new Array(l);
  let sum = 0;
  for (let i = 0; i < l; i++) {
    list[i] = gas[i] - cost[i];
    sum += list[i];
  }
  if (sum < 0) return -1;
  for (let i = 0; i < l; ) {
    sum = 0;
    for (let count = 0; count < l; count++) {
      sum += list[(i + count) % l];
      if (sum < 0) {
        i += count;
        break;
      }
    }
    if (sum >= 0) return i;
    i++;
  }
  return -1;
};
var a = [1, 2, 3, 4, 5];
var b = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(a, b));
