// var findSubsequences = function (nums) {
//   const l = nums.length;
//   const res = [];
//   if (l < 2) return res;
//   const search = (cur, index) => {
//     if (cur.length > 1) {
//       res.push(cur.slice());
//     }
//     const set = new Set();
//     for (let i = index; i < l; i++) {
//       if (cur.length && nums[i] < cur[cur.length - 1]) continue;
//       if (set.has(nums[i])) continue;
//       set.add(nums[i]);
//       const temp = cur.slice();
//       temp.push(nums[i]);
//       search(temp, i + 1);
//     }
//   };
//   search([], 0);
//   return res;
// };
// const nums = [4, 6, 7, 7];
// console.log(findSubsequences(nums));

var findTargetSumWays = function (nums, S) {
  const list = nums.filter((item) => item !== 0);
  let map = new Map();
  const l = list.length;
  if (!l && !S) return Math.pow(2, nums.length);
  map.set(list[0], 1);
  map.set(-1 * list[0], 1);
  for (let i = 1; i < l; i++) {
    const newMap = new Map();
    for (const key of map.keys()) {
      newMap.set(
        key + list[i],
        (map.get(key) || 0) + (newMap.get(key + list[i]) || 0)
      );
      newMap.set(
        key - list[i],
        (map.get(key) || 0) + (newMap.get(key - list[i]) || 0)
      );
    }
    map = newMap;
  }
  return (map.get(S) || 0) * Math.pow(2, nums.length - l);
};
const a = [1];
console.log(findTargetSumWays(a, 2));
