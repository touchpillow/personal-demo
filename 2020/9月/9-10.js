// var minSubArrayLen = function (s, nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   const sum = nums.reduce((a, b) => a + b);
//   if (sum < s) return 0;
//   if (sum == s) return nums.length;
//   const search = (left, right, sum) => {
//     if (Math.min(nums[left], nums[right]) + s > sum) return right - left + 1;
//     if (nums[left] > nums[right]) {
//       return search(left, right - 1, sum - nums[right]);
//     } else if (nums[left] < nums[right]) {
//       return search(left + 1, right, sum - nums[left]);
//     } else {
//       return Math.min(
//         search(left, right - 1, sum - nums[right]),
//         search(left + 1, right, sum - nums[left])
//       );
//     }
//   };
//   return search(left, right, sum);
// };
// const s = 7,
//   nums = [2, 3, 1, 2, 4, 3];

// console.log(minSubArrayLen(s, nums));
// var RecentCounter = function () {
//   this.list = [];
// };

// /**
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function (t) {
//   this.list.push(t);
//   const l = this.list.length;
//   for (let i = 0; i < l; i++) {
//     if (this.list[i] >= t - 3000) return l - i;
//   }
// };
var reorderLogFiles = function (logs) {
  const l1 = [];
  const l2 = [];
  for (const s of logs) {
    if (s.split(" ")[1][0] > 96) {
      l1.push(s);
    } else {
      l2.push(s);
    }
  }
  l1.sort((cNum, nNum) => {
    let cNumIndex = cNum.indexOf(" ");
    let nNumIndex = nNum.indexOf(" ");
    let cSplit1 = cNum.substring(0, cNumIndex);
    let cSplit2 = cNum.substring(cNumIndex, cNum.length);
    let nSplit1 = nNum.substring(0, nNumIndex);
    let nSplit2 = nNum.substring(nNumIndex, nNum.length);
    if (cSplit2 === nSplit2) {
      return cSplit1 < nSplit1 ? -1 : 1;
    } else {
      return cSplit2 < nSplit2 ? -1 : 1;
    }
  });
  return l1.concat(l2);
};
