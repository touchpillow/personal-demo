// var divingBoard = function (shorter, longer, k) {
//   if (!k) return [];
//   if (shorter == longer) return [k * shorter];
//   const list = new Array(k + 1);
//   for (let i = 0; i <= list; i++) {
//     list[i] = longer * i + shorter * (k - i);
//   }
//   return list;
// };
var circularArrayLoop = function (nums) {
  const l = nums.length;
  const set = new Set();
  const tempSet = new Set();
  const dfs = (i, pre = null) => {
    if (i === pre) return false;
    if (nums[i] * nums[pre] < 0) return false;
    console.log(i, pre);
    if (tempSet.has(i)) return true;
    if (set.has(i)) return false;
    set.add(i);
    tempSet.add(i);
    return dfs((i + nums[i] + Math.abs(nums[i]) * l) % l, i);
  };
  for (let i = 0; i < l; i++) {
    if (set.has(i)) continue;
    tempSet.clear();
    const v = dfs(i);
    if (v) return true;
  }
  return false;
};
// var circularArrayLoop = function (nums) {
//   const l = nums.length;
//   let fast;
//   let slow;
// };
console.log(circularArrayLoop([-2, -3, -9]));
