// var canConstruct = function (ransomNote, magazine) {
//     const l1 = ransomNote.length;
//     const l2 = magazine.length;
//     if (l1 > l2) return false;
//     let start = 0;
//     for (let i = 0; i < l1; i++) {
//         start = magazine.indexOf(ransomNote[i], start);
//         if (start < 0) {
//             return false;
//         }
//     }
//     return true;
// };
// var firstUniqChar = function (s) {
//   const set = new Map();
//   for (const i of s) {
//     if (set.has(i)) {
//       set.set(i, set.get(i) + 1);
//     } else {
//       set.set(i, 1);
//     }
//   }
//   for (let i = 0, l = s.length; i < l; i++) {
//     if (set.get(s[i]) == 1) return i;
//   }
// };
var permuteUniqueA = (nums, pre, res) => {
  if (nums.length === 1) {
    res.push(pre.concat(nums));
  } else {
    let set = new Set();
    nums.forEach((item, index) => {
      const a = nums.slice(0);
      const newItem = pre.slice();
      const lastItem = newItem[newItem.length - 1];
      if (!set.has(item)) {
        newItem.push(item);
        set.add(item);
        a.splice(index, 1);
        permuteUniqueA(a, newItem, res);
      }
    });
  }
};
var permuteUnique = function (nums) {
  const res = [];
  permuteUniqueA(nums, res, []);
};
