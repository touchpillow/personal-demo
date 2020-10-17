// var sortByBits = function (arr) {
//   const map = new Map();
//   arr.sort((a, b) => {
//     const l1 = getL(a);
//     const l2 = getL(b);
//     if (l1 == l2) return a - b;
//     return l1 - l2;
//   });
//   function getL(a) {
//     if (map.get(a)) return map.get(a);
//     const l = a
//       .toString(2)
//       .split("")
//       .filter((i) => i == 1).length;
//     map.set(a, l);
//     return l;
//   }
//   return arr;
// };
// var daysBetweenDates = function (date1, date2) {
//   const mod = 3600 * 24 * 1000;
//   return (new Date(date1).getTime() - new Date(date2).getTime()) / mod;
// };
// var postorderTraversal = function (root) {
//   const res = [];
//   const search = (root) => {
//     if (!root) return;
//     search(root.left);
//     search(root.right);
//     res.push(root.val);
//   };
//   return res;
// };
// var postorderTraversal = function (root) {
//   const stack = [root];
//   const res = [];
//   while (stack.length) {
//     const item = stack.pop();
//     if (!item) continue;
//     if (item.left || item.right) {
//       const left = item.left;
//       const right = item.right;
//       item.left = null;
//       item.right = null;
//       stack.push(item);
//       stack.push(right);
//       stack.push(left);
//     } else {
//       res.push(item.val);
//     }
//   }
//   return res;
// };
// var trimMean = function (arr) {
//   arr.sort((a, b) => a - b);
//   const l = arr.length;
//   let sum = 0;
//   for (let i = ~~(0.05 * l); i < ~~(0.95 * l); i++) {
//     sum += arr[i];
//   }
//   return sum / (0.9 * l);
// };

// console.log(trimMean(arr));
const getDis = (a, b) => {
  return Math.sqrt(Math.pow(a[0] - b[0], 2), Math.pow(a[1] - b[1], 2));
};
var bestCoordinate = function (towers, radius) {
  towers.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  const list = towers.map((item) => {
    return getQ(item);
  });
  console.log(list, towers);
  let max = Math.max(...list);

  const l = towers.length;
  const middle = towers.reduce(
    (res, item) => {
      res[0] += item[0] * item[2];
      res[1] += item[1] * item[2];
      return res;
    },
    [0, 0]
  );
  middle[0] /= l;
  middle[1] /= l;
  let midx1 = middle[0];
  let midx2 = middle[0];
  let midy1 = middle[1];
  let midy2 = middle[1];
  if (!Number.isInteger(middle[0])) {
    midx1 = ~~middle[0];
    midx2 = Math.ceil(middle[0]);
  }
  if (!Number.isInteger(middle[1])) {
    midy1 = ~~middle[1];
    midy2 = Math.ceil(middle[1]);
  }
  const temp = [
    [midx1, midy1],
    [midx1, midy2],
    [midx2, midy1],
    [midx2, midy2],
  ];
  const tempQ = temp.map((item) => getQ(item));
  const tempMax = Math.max(...tempQ);
  console.log(max, tempMax);
  if (max >= tempMax) {
    const index = list.findIndex((i) => i == max);
    return [towers[index][0], towers[index][1]];
  } else {
    const index = tempQ.findIndex((i) => i == tempMax);
    return temp[index];
  }
  function getQ(item) {
    return towers.reduce((res, i) => {
      const dis = getDis(i, item);
      if (dis > radius) return res;
      res += ~~(i[2] / (1 + dis));
      console.log(dis, res, i, item);
      return res;
    }, 0);
  }
};
const towers = [
    [18, 12, 31],
    [45, 39, 36],
    [14, 26, 25],
  ],
  radius = 34;
console.log(bestCoordinate(towers, radius));
// var Fancy = function () {
//   this.num = [];
//   this.fn = [];
//   this.index = [];
//   this.mod = Math.pow(10, 9) + 7;
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// Fancy.prototype.append = function (val) {
//   this.num.push(val);
// };

// /**
//  * @param {number} inc
//  * @return {void}
//  */
// Fancy.prototype.addAll = function (inc) {
//   this.index.push(this.num.length);
//   this.fn.push((a) => a + inc);
// };

// /**
//  * @param {number} m
//  * @return {void}
//  */
// Fancy.prototype.multAll = function (m) {
//   this.index.push(this.num.length);
//   this.fn.push((a) => a * m);
// };

// /**
//  * @param {number} idx
//  * @return {number}
//  */
// Fancy.prototype.getIndex = function (idx) {
//   if (idx >= this.num.length) return -1;
//   let res = this.num[idx];
//   const i = this.index.findIndex((i) => idx <= i);
//   if (i < 0) return res % this.mod;
//   for (let j = i, l = this.fn.length; j < l; j++) {
//     res = this.fn[j](res);
//   }
//   return res % this.mod;
// };
// const a = new Fancy();
// a.append(1);
// a.append(2);
// a.append(3);
// a.addAll(2);
// a.multAll(4);
// a.addAll(2);
// console.log(a.getIndex(2));
