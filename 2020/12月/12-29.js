// var validSquare = function (p1, p2, p3, p4) {
//   const list = [p1, p2, p3, p4];
//   const pot = list.map((item) => `${item[0]}-${item[1]}`);
//   if (new Set(pot).size !== 4) return false;
//   const x = (p1[0] + p2[0] + p3[0] + p4[0]) / 4;
//   const y = (p1[1] + p2[1] + p3[1] + p4[1]) / 4;
//   const dis = list.map(
//     (item) => Math.pow(item[0] - x, 2) + Math.pow(item[1] - y, 2)
//   );
//   console.log(dis);
//   if (new Set(dis).size !== 1) return false;
//   const line = [];
//   for (let i = 0; i < 3; i++) {
//     for (let j = i + 1; j < 4; j++) {
//       line.push(
//         Math.pow(list[i][0] - list[j][0], 2) +
//           Math.pow(list[i][1] - list[j][1], 2)
//       );
//     }
//   }
//   const v = [...new Set(line)];
//   console.log(v);
//   if (v.length !== 2) return false;
//   if (2 * v[0] !== v[1] && 2 * v[1] !== v[0]) return false;
//   return true;
// };
// const p1 = [0, 0],
//   p2 = [1, 1],
//   p3 = [1, 0],
//   p4 = [0, 1];
// console.log(validSquare(p1, p2, p3, p4));
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  const l = nums.length;
  let c = 0;
  for (let i = 0; i < l - 2; i++) {
    let k = i + 2;
    for (let j = i + 1; j < l - 1 && nums[i] != 0; j++) {
      while (k < l && nums[i] + nums[j] > nums[k]) k++;
      c += k - j - 1;
    }
  }
  return c;
};
