// var truncateSentence = function (s, k) {
//   return s.split(" ").slice(0, k).join(" ");
// };
// var findingUsersActiveMinutes = function (logs, k) {
//   const map = new Map();
//   const res = new Array(k).fill(0);
//   for (const [id, time] of logs) {
//     if (!map.has(id)) {
//       map.set(id, new Set());
//     }
//     map.get(id).add(time);
//   }
//   for (const v of map.values()) {
//     const c = v.size;
//     if (c <= k) {
//       res[c - 1]++;
//     }
//   }
//   return res;
// };
// const logs = [
//     [1, 1],
//     [2, 2],
//     [2, 3],
//   ],
//   k = 4;
// console.log(findingUsersActiveMinutes(logs, k));
// var minAbsoluteSumDiff = function (nums1, nums2) {
//   const mod = Math.pow(10, 9) + 7;
//   const l = nums1.length;
//   const sort = nums1.slice().sort((a, b) => a - b);
//   const getAbs = (v) => {
//     let left = 0;
//     let right = l - 1;
//     if (sort[left] === v || sort[right] === v) return 0;
//     if (v < sort[left]) return sort[left] - v;
//     if (v > sort[right]) return v - sort[right];
//     while (right > left) {
//       if (right - left === 1) break;
//       const mid = ~~((left + right) / 2);
//       if (mid === left) break;
//       if (sort[mid] === v) return 0;
//       if (sort[mid] > v) {
//         right = mid;
//       } else {
//         left = mid;
//       }
//     }
//     return Math.min(Math.abs(v - sort[left]), Math.abs(sort[right] - v));
//   };

//   const absList = nums1.map((v1, index) => {
//     const v = Math.abs(v1 - nums2[index]);
//     return v;
//   });
//   const sum = absList.reduce((a, b) => a + b, 0);
//   const newSort = nums2.map((v) => {
//     return getAbs(v);
//   });
//   let maxChange = 0;
//   for (let i = 0; i < l; i++) {
//     maxChange = Math.max(maxChange, absList[i] - newSort[i]);
//   }
//   if (!sum) return sum;
//   return (sum - maxChange) % mod;
// };
// const nums1 = [1, 10, 4, 4, 2, 7],
//   nums2 = [9, 3, 5, 1, 7, 4];
// console.log(minAbsoluteSumDiff(nums1, nums2));
// const nums = require("./4-4.test.case");
// console.log(nums[0]);
const nums = [13, 7, 4, 16, 1];

var countDifferentSubsequenceGCDs = function (nums) {
  nums = [...new Set(nums)];
  const l = nums.length;
  const cache = new Map();
  nums.sort((a, b) => a - b, 0);
  const set = new Set(nums);

  for (let i = 0; i < l - 1; i++) {
    for (let j = i + 1; j < l; j++) {
      set.add(gcd(nums[i], nums[j]));
    }
  }
  return set.size;
};
// const nums = [5, 15, 40, 5, 6];

console.log(countDifferentSubsequenceGCDs(nums));
const gcd = (a, b) => {
  if (!b) return a;
  return gcd(b, a % b);
};
var countDifferentSubsequenceGCDs = function (a) {
  const n = a.length;
  let mx = 0;
  const state = new Array(200000 + 1).fill(false);
  for (let i = 0; i < n; i++) {
    state[a[i]] = true;
    mx = Math.max(mx, a[i]);
  }
  let ans = 0;
  for (let i = 1; i <= mx; i++) {
    let now = -1;
    for (let j = i; j <= mx; j += i) {
      if (state[j]) {
        if (now == -1) now = j / i;
        else now = gcd(now, j / i);
        if (now == 1) break;
      }
    }
    if (now == 1) ans++;
  }
  return ans;
};
