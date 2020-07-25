// var merge = function (intervals) {
//   const list = [];
//   if (!intervals.length) return list;
//   intervals.sort((a, b) => a[0] - b[0]);
//   list.push(intervals[0]);
//   for (let i = 1, l = intervals.length; i < l; i++) {
//     const last = list[list.length - 1];
//     if (last[1] < intervals[i][0]) {
//       list.push(intervals[i]);
//     } else {
//       last[1] = intervals[i][1];
//     }
//   }

//   return list;
// };
// var a = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];
// console.log(merge(a));
var findDisappearedNumbers = function (nums) {
  const l = nums.length;
  const res = [];
  if (!l) return res;
  for (const item of nums) {
    const v = Math.abs(item);
    if (nums[v - 1] > 0) {
      nums[v - 1] *= -1;
    }
  }
  for (let i = 0; i < l; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
