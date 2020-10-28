// var maxProduct = function (nums) {
//   nums.sort((a, b) => a - b);
//   return nums[0] * nums[1];
// };
// var maxProduct = function (nums) {
//   let v1 = nums[0];
//   let v2 = -Infinity;
//   for (const n of nums) {
//     if (n > v1) {
//       v2 = v1;
//       v1 = n;
//     } else if (n >= v2) {
//       v2 = n;
//     }
//   }
//   return (v1 - 1) * (v2 - 1);
// };
// var shuffle = function (nums, n) {
//   const res = new Array(2 * n);
//   const list = new Array(2 * n);
//   for (let i = 0; i < n; i++) {
//     res[i] = 2 * i;
//   }
//   for (let i = n; i < 2 * n; i++) {
//     res[i] = 2 * (i - n) + 1;
//   }
//   for (let i = 0; i < 2 * n; i++) {
//     list[res[i]] = nums[i];
//   }
//   return list;
// };
// const a = [2, 5, 1, 3, 4, 7],
//   n = 3;
// console.log(shuffle(a, n));
// var kSmallestPairs = function (nums1, nums2, k) {
//   nums1 = nums1.slice(0, k);
//   nums2 = nums2.slice(0, k);
//   const l1 = nums1.length;
//   const l1 = nums2.length;
//   let res = [];
//   for (let i = 0; i < l1 && i < k; i++) {
//     for (let j = 0; j < l2 && j < k; j++) {
//       res.push([i, j]);
//     }
//   }
//   res.sort((a, b) => {
//     return nums1[a[0]] + nums2[a[1]] - nums1[b[0]] - nums2[b[1]];
//   });
//   res = res.slice(0, k);
//   return res.map((item) => [nums1[item[0]], nums2[item[1]]]);
// };
var kSmallestPairs = function (nums1, nums2, k) {
  if (k == 0) return [];

  nums1 = nums1.slice(0, k);
  nums2 = nums2.slice(0, k);
  const l1 = nums1.length;
  const l2 = nums2.length;
  k = Math.min(l1 * l2, k);
  if (!l1 || !l2) return [];
  if (k == 1) return [nums1[0], nums2[0]];

  const list = new Array(l1).fill(0);
  const res = [];
  while (res.length < k) {
    let curV =
      nums1[0] + (nums2[list[0]] === undefined ? Infinity : nums2[list[0]]);
    let index = 0;
    for (let i = 1; i < l1; i++) {
      if (
        nums1[i] + (nums2[list[i]] === undefined ? Infinity : nums2[list[i]]) <
        curV
      ) {
        curv =
          nums1[i] + (nums2[list[i]] === undefined ? Infinity : nums2[list[i]]);
        index = i;
        console.log(curv, index, nums1[i]);
      }
    }
    console.log(index);
    res.push([nums1[index], nums2[list[index]]]);
    list[index]++;
  }
  return res;
};
const nums1 = [-10, -4, 0, 0, 6],
  nums2 = [3, 5, 6, 7, 8, 100],
  k = 10;
console.log(kSmallestPairs(nums1, nums2, k));
