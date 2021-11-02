const findIndex = (list, v) => {
  const l = list.length;
  let left = 0,
    right = l - 1;
  if (list[right] <= v) return right;
  if (list[left] > v) return -1;
  while (true) {
    const mid = ~~((left + right) / 2);
    if (mid === left) return left;
    if (list[mid] === v) return mid;
    if (list[mid] < v) {
      left = mid;
    } else {
      right = mid;
    }
  }
};
// var findDiagonalOrder = function (nums) {
//   const h = nums.length;
//   let k = 0;
//   let list = new Array(h).fill(0).map((i, index) => index);
//   const indexList = new Array(h).fill(0);
//   const res = [];
//   while (list.length) {
//     const curIndex = findIndex(list, Math.min(k, h - 1));

//     if (curIndex >= 0) {
//       for (let i = curIndex; i >= 0; i--) {
//         // console.log(k, i, list[i]);
//         res.push(nums[list[i]][indexList[list[i]]]);
//         indexList[list[i]]++;
//         if (indexList[list[i]] === nums[list[i]].length) {
//           list.splice(i, 1);
//         }
//       }
//     }
//     k++;
//   }
//   return res;
// };
const nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(findDiagonalOrder(nums));
var findDiagonalOrder = function (nums) {
  const h = nums.length;
  const res = [];
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      res.push([nums[i][j], i, j]);
    }
  }
  return res
    .sort(([a, b, c], [d, e, f]) => {
      if (b + c === e + f) return e - b;
      return b + c - e - f;
    })
    .map((item) => item[1]);
};
