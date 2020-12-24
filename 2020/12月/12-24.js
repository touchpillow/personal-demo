// var findCircleNum = function (M) {
//   const n = M.length;
//   const set = new Set();
//   const c = 0;
//   const dfs = (index) => {
//     if (set.has(index)) return;
//     set.add(index);
//     for (let i = 0; i < n; i++) {
//       if (M[index][i] === 1) {
//         dfs(i);
//       }
//     }
//   };
//   for (let i = 0; i < n; i++) {
//     if (!set.has(i)) {
//       c++;
//       dfs(i);
//     }
//   }
//   return c;
// };
var optimalDivision = function (nums) {
  const l = nums.length;
  if (l < 3) return nums.join("/");
  return `${nums[0]}/(${nums.slice(l).join("/")})`;
};
const a = [1000, 100, 10, 2];

console.log(optimalDivision(a));
