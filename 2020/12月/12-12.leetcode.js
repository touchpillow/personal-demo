// var countConsistentStrings = function (allowed, words) {
//   const set = new Set(allowed);
//   return words.filter((item) => {
//     return [...item].every((s) => set.has(s));
//   }).length;
// };
// const allowed = "cad",
//   words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
// console.log(countConsistentStrings(allowed, words));
// var getSumAbsoluteDifferences = function (nums) {
//   const l = nums.length;
//   const left = new Array(l).fill(0);
//   const right = new Array(l).fill(0);
//   for (let i = 1; i < l; i++) {
//     left[i] = nums[i] - nums[i - 1];
//   }
//   for (let i = 1; i < l; i++) {
//     left[i] = left[i] + left[i - 1];
//   }
//   const sum = left.reduce((a, b) => a + b);
//   left[0] = sum;
//   for (let i = 1; i < l; i++) {
//     left[i] = left[i - 1] - (l - i) * (nums[i] - nums[i - 1]);
//   }
//   for (let i = l - 2; i >= 0; i--) {
//     right[i] = nums[i + 1] - nums[i];
//   }
//   for (let i = l - 2; i >= 0; i--) {
//     right[i] = right[i] + right[i + 1];
//   }
//   const rSum = right.reduce((a, b) => a + b);
//   right[l - 1] = rSum;
//   for (let i = l - 2; i >= 0; i--) {
//     right[i] = right[i + 1] - (i + 1) * (nums[i + 1] - nums[i]);
//   }
//   const res = new Array(l).fill(0);
//   for (let i = 0; i < l; i++) {
//     res[i] = left[i] + right[i];
//   }
//   return res;
// };
// const nums = [1, 4, 6, 8, 10];
// console.log(getSumAbsoluteDifferences(nums));
// var stoneGameVI = function (aliceValues, bobValues) {
//   const l = aliceValues.length;
//   const alist = new Array(l).fill(0);
//   const aIndex = new Array(l).fill(0);
//   for (let i = 0; i < l; i++) {
//     aIndex[i] = i;
//   }
//   const bIndex = aIndex.slice();
//   aIndex.sort((a, b) => {
//     return aliceValues[b] - aliceValues[a];
//   });
//   bIndex.sort((a, b) => {
//     return bobValues[b] - bobValues[a];
//   });
//   const set = new Set();
//   let a = 0,
//     b = 0;
//   while (aIndex.length && bIndex.length) {
//     while (aIndex.length && set.has(aIndex[0])) {
//       aIndex.shift();
//     }
//     if (!aIndex.length) break;
//     const ai = aIndex.shift();
//     a += aliceValues[ai];
//     set.add(ai);
//     while (bIndex.length && set.has(bIndex[0])) {
//       bIndex.shift();
//     }
//     if (!bIndex.length) break;
//     if (!bIndex.length) break;
//     const bi = bIndex.shift();
//     b += bobValues[bi];
//     set.add(bi);
//   }
//   if (a > b) return 1;
//   if (a < b) return -1;
//   return 0;
// };
var stoneGameVI = function (aliceValues, bobValues) {
  const l = aliceValues.length;
  const alist = new Array(l).fill(0);
  const aIndex = new Array(l).fill(0);
  for (let i = 0; i < l; i++) {
    aIndex[i] = i;
    alist[i] = aliceValues[i] + bobValues[i];
  }
  aIndex.sort((a, b) => {
    return Math.abs(alist[b]) - Math.abs(alist[a]);
  });

  let a = 0,
    b = 0;
  for (let i = 0; i < l; i++) {
    if (i % 2) {
      b += bobValues[aIndex[i]];
    } else {
      a += aliceValues[aIndex[i]];
    }
  }
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};
const aliceValues = [1, 3],
  bobValues = [2, 1];
console.log(stoneGameVI(aliceValues, bobValues));
