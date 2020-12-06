// var maxOperations = function (nums, k) {
//   const map = {};
//   let c = 0;
//   for (const n of nums) {
//     if (map[k - n]) {
//       c++;
//       map[k - n]--;
//     } else {
//       map[n] = (map[n] || 0) + 1;
//     }
//   }
//   return c;
// };
// const nums = [3, 1, 3, 4, 3],
//   k = 6;
// console.log(maxOperations(nums, k));
// var concatenatedBinary = function (n) {
//   const mod = Math.pow(10, 9) + 7;
//   let c = 0;
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     const temp = i.toString(2);
//     sum = (sum * Math.pow(2, temp.length) + i) % mod;
//   }
//   return sum;
// };
// console.log(concatenatedBinary(12));
var minimumIncompatibility = function (nums, k) {
  const l = nums.length;
  nums.sort((a, b) => b - a);
  const map = new Map();
  let max = 0;
  const c = l / k;
  for (const item of nums) {
    map.set(item, (map.get(item) || 0) + 1);
    max = Math.max(map.get(item), max);
  }
  if (max > k) return -1;
  let sum = 0;
  const set = new Set();
  console.log(nums);
  while (k--) {
    set.clear();
    const max = nums[0];
    let min;
    let index = 0;
    for (let i = 0; i < c; i++) {
      while (set.has(nums[index])) {
        index++;
      }
      set.add(nums[index]);
      min = nums[index];
      nums.splice(index, 1);
    }
    console.log(max, min);
    sum += max - min;
  }
  return sum;
};
const nums = [6, 3, 8, 1, 3, 1, 2, 2],
  k = 4;
console.log(minimumIncompatibility(nums, k));
