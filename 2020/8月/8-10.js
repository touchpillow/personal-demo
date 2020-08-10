// var imageSmoother = function (M) {
//   const h = M.length;
//   if (!h) return [];
//   const w = M[0].length;
//   const getEverage = (i, j) => {
//     let sum = 0,
//       count = 0;
//     for (let m = i > 0 ? i - 1 : 0; m < i + 2 && m < h; m++) {
//       for (let n = j > 0 ? j - 1 : 0; n < j + 2 && n < w; n++) {
//         count++;
//         sum += M[m][n];
//       }
//     }
//     console.log(i, j, sum, count, h, w);
//     return ~~(sum / count);
//   };
//   const matrix = new Array(h).fill(null).map(() => new Array(w));
//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       matrix[i][j] = getEverage(i, j);
//     }
//   }
//   return matrix;
// };
// var a = [
//   [1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3],
// ];
// console.log(imageSmoother(a));
// var checkPossibility = function (nums) {
//   const l = nums.length;
//   if (l < 3) return true;
//   let count = 0;
//   for (let i = 1; i < l; i++) {
//     if (count > 1) return false;
//     if (nums[i] < nums[i - 1]) {
//       nums[i] = nums[i - 1];
//       count++;
//     }
//   }

//   return count < 2;
// };
// var a = [1, 2, 4, 5, 3];
// console.log(checkPossibility(a));
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const stack = [root];
  let flag = true;
  const res = [];
  while (stack.length) {
    const tempStack = [];
    const temp = stack.reduce((res, item) => {
      if (flag) {
        res.push(item.val);
      } else {
        res.unshift(item.val);
      }
      if (item.left) {
        tempStack.push(item.left);
      }
      if (item.right) {
        tempStack.push(item.right);
      }
    }, []);
    res.push(temp);
    flag = !flag;
    stack.splice(0, Infinity, ...tempStack);
  }
  return res;
};
