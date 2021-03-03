// var threeSumMulti = function (arr, target) {
//   const map = new Map();
//   for (const n of arr) {
//     map.set(n, (map.get(n) || 0) + 1);
//   }
//   const nums = [...map.keys()];
//   const mod = Math.pow(10, 9) + 7;
//   nums.sort((a, b) => a - b);
//   const l = nums.length;
//   let c = 0;
//   for (let i = 0; i < l; ) {
//     if (3 * nums[i] === target) {
//       c =
//         (c +
//           (map.get(nums[i]) * (map.get(nums[i]) - 1) * (map.get(nums[i]) - 2)) /
//             6) %
//         mod;
//     } else {
//       c =
//         (c +
//           (map.get(nums[i]) *
//             (map.get(nums[i]) - 1) *
//             (map.get(target - 2 * nums[i]) || 0)) /
//             2) %
//         mod;
//     }
//     if (nums[i] > target) {
//       i++;
//       continue;
//     }
//     let start = i + 1;
//     let end = l - 1;
//     if (i >= l - 2) {
//       i++;
//       continue;
//     }
//     do {
//       if (start >= end) break;
//       let result = nums[i] + nums[start] + nums[end];
//       if (result === target) {
//         c =
//           (c + map.get(nums[i]) * map.get(nums[start]) * map.get(nums[end])) %
//           mod;
//       }
//       if (result < target) {
//         start++;
//       } else {
//         end--;
//       }
//     } while (start < end);
//     i++;
//   }
//   return c;
// };
// const a = [0, 0, 0];
// const b = 0;

// console.log(threeSumMulti(a, b));
var minFlipsMonoIncr = function (S) {
  let left = 0;
  let right = 0;

  let v0 = 0;

  for (const s of S) {
    if (s === "0") {
      v0++;
    }
  }
  let min = Math.min(v0, S.length - v0);
  if (!min) return 0;
  for (const s of S) {
    if (s === "0") {
      left++;
    } else {
      right++;
    }
    min = Math.min(v0 - left + right, min);
  }
  return min;
};
