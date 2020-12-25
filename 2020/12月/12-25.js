// var leastBricks = function (wall) {
//   const map = new Map();
//   let rowSum = 0;
//   for (const row of wall) {
//     let sum = 0;
//     for (const item of row) {
//       sum += item;
//       map.set(sum, (map.get(sum) || 0) + 1);
//     }
//     rowSum = sum;
//   }
//   map.delete(rowSum);
//   if (!map.size) return wall.length;
//   return rowSum - Math.max(...map.values());
// };
// const a = [[1, 1], [2], [1, 1]];
// console.log(leastBricks(a));
var nextGreaterElement = function (n) {
  let s = `${n}`.split("");
  let i = s.length - 2;
  while (s[i] >= s[i + 1]) i--; // 从右开始，找第一个严格降序的数字
  if (i < 0) return -1; // 不存在，返回-1
  let j = s.length - 1;
  while (s[j] <= s[i]) j--; // 从右开始，找到第一个比上一步找到数字大的
  [s[i], s[j]] = [s[j], s[i]]; // 换位
  let res = parseInt(
    s.slice(0, i + 1).join("") +
      s
        .slice(i + 1)
        .reverse()
        .join("")
  ); // 反转右边
  return res >= 2 ** 31 - 1 ? -1 : res;
};
