// var sumOddLengthSubarrays = function (arr) {
//   const l = arr.length;
//   if (!l) return 0;
//   let res = 0;
//   for (let i = 0; i < l; i++) {
//     let sum = 0;
//     for (let j = i; j < l; j++) {
//       sum += arr[j];
//       if ((j - i) % 2) continue;
//       res += sum;
//     }
//   }
//   return res;
// };
// const a = [10, 11, 12];
// console.log(sumOddLengthSubarrays(a));
// var maxSumRangeQuery = function (nums, requests) {
//   nums.sort((a, b) => a - b);
//   const list = new Array(nums.length).fill(0);
//   for (const [start, end] of requests) {
//     for (let i = start; i <= end; i++) {
//       list[i]++;
//     }
//   }
//   list.sort((a, b) => a - b);
//   console.log(nums, list);
//   return (
//     list.reduce((res, item, index) => res + item * nums[index], 0) % 1000000007
//   );
// };
// const nums = [5, 5, 3],
//   requests = [
//     [2, 2],
//     [0, 1],
//     [1, 2],
//   ];
// console.log(maxSumRangeQuery(nums, requests));
// var minSubarray = function (nums, p) {
//   const l = nums.length;
//   const res = new Array(l + 1);
//   res[0] = 0;
//   for (let i = 0; i < l; i++) {
//     res[i + 1] = res[i] + nums[i];
//   }
//   const sum = res[l];
//   if (!(sum % p)) return 0;
//   let length = l;
//   for (let i = 1; i < l; i++) {
//     for (let j = 0; j + i <= l; j++) {
//       if (!((sum + res[j] - res[i + j]) % p)) return i;
//     }
//   }
//   return -1;
// };
// const nums = [1000000000, 1000000000, 1000000000],
//   p = 3;
// console.log(minSubarray(nums, p));
var isPrintable = function (targetGrid) {
  const h = targetGrid.length;
  const w = targetGrid[0].length;
  const map = new Map();
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const v = targetGrid[i][j];
      if (!map.has(v)) {
        map.set(v, { xMin: i, xMax: i, yMin: j, yMax: j });
      } else {
        map.get(v).xMax = Math.max(i, map.get(v).xMax);
        map.get(v).xMin = Math.min(i, map.get(v).xMin);
        map.get(v).yMax = Math.max(j, map.get(v).yMax);
        map.get(v).yMin = Math.min(j, map.get(v).yMin);
      }
    }
  }
  const keys = [...map.entries()].sort((a, b) => a[0]);
  for (let i = keys.length - 1; i >= 0; i--) {
    const cur = map.get(keys[i]);
    let flag = true;
    for (let m = cur.xMin; m <= cur.xMax; m++) {
      if (!flag) break;
      for (let n = cur.yMin; n <= cur.yMax; n++) {
        if (targetGrid[m][n] !== 0 && targetGrid[m][n] !== keys[i]) {
          flag = false;
          break;
        }
      }
    }
    if (!flag) continue;
    for (let m = cur.xMin; m <= cur.xMax; m++) {
      for (let n = cur.yMin; n <= cur.yMax; n++) {
        targetGrid[m][n] = 0;
      }
    }
  }
  console.log(targetGrid);
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (targetGrid[i][j] !== 0) return false;
    }
  }
  return true;
};
// const c = [
//   [1, 1, 1, 1, 3, 1, 1, 1],
//   [1, 1, 1, 1, 3, 1, 1, 1],
//   [1, 1, 1, 1, 3, 1, 1, 1],
//   [1, 1, 1, 1, 3, 2, 2, 2],
//   [1, 1, 1, 1, 3, 2, 2, 2],
//   [1, 1, 1, 1, 3, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 4, 4],
//   [1, 6, 6, 6, 6, 6, 6, 1],
//   [1, 6, 6, 6, 6, 6, 6, 1],
// ];
// const c = [
//   [1, 1, 1, 1],
//   [1, 1, 3, 3],
//   [1, 1, 3, 4],
//   [5, 5, 1, 4],
// // ];
const c = [
  [6, 2, 2, 5],
  [2, 2, 2, 5],
  [2, 2, 2, 5],
  [4, 3, 3, 4],
];
console.log(isPrintable(c));
