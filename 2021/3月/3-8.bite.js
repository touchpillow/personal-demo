// var lengthOfLongestSubstring = function (s) {
//   const set = new Set();
//   const map = new Map();
//   let left = 0;
//   let right = 0;
//   const l = s.length;
//   let max = 0;
//   while (right < l) {
//     if (!set.has(s[right])) {
//       set.add(s[right]);
//       map.set(s[right], right);
//       max = Math.max(set.size, max);
//       right++;
//     } else {
//       if (map.get(s[left]) === left) {
//         set.delete(s[left]);
//       }
//       left++;
//     }
//   }
//   return max;
// };
// // console.log(lengthOfLongestSubstring(""));
// var checkInclusion = function (s1, s2) {
//   const map1 = new Map();
//   const map2 = new Map();
//   for (const s of s1) {
//     map1.set(s, (map1.get(s) || 0) + 1);
//   }
//   const l1 = s1.length;
//   if (l1 === 1) return s2.includes(s1);
//   const keys = [...map1.keys()];
//   const l2 = s2.length;
//   for (let i = 0; i < l1; i++) {
//     map2.set(s2[i], (map2.get(s2[i]) || 0) + 1);
//   }
//   let i = l1;
//   const check = () => {
//     return keys.every((item) => {
//       return map1.get(item) <= (map2.get(item) || 0);
//     });
//   };
//   if (check()) return true;
//   while (i < l2) {
//     map2.set(s2[i], (map2.get(s2[i]) || 0) + 1);
//     map2.set(s2[i - l1], (map2.get(s2[i - l1]) || 0) - 1);
//     if (check()) {
//       return true;
//     }
//     i++;
//   }
//   return false;
// };
// const s1 = "ab",
//   s2 = "eidboaoo";
// console.log(checkInclusion(s1, s2));
