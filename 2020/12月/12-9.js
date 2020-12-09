// var makesquare = function (nums) {
//   const l = nums.length;
//   if (l < 4) return false;
//   const sum = nums.reduce((a, b) => a + b);
//   if (sum % 4) return false;
//   nums.sort((a, b) => a - b);
//   const num = sum / 4;
//   if (num < nums[l - 1]) return false;
//   if (nums[0] + nums[l - 1] > num) return false;
//   let set = new Set();
//   console.log(nums, num);
//   for (const item of nums) {
//     const temp = new Set();
//     temp.add(item);
//     for (const v of set) {
//       temp.add(v + item);
//       temp.add(v);
//     }
//     set = temp;
//   }
//   return set.has(num) && set.has(2 * num) && set.has(3 * num);
// };
// const a = [5, 5, 5, 5, 16, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4];
// console.log(makesquare(a));
// // const set = new Set([3, 4]);
var findMaxForm = function (strs, m, n) {
  const l = strs.length;
  const valueList = strs.map((item) => {
    let v0 = 0,
      v1 = 0;
    for (let i = 0; i < item.length; i++) {
      if (item[i] == "0") {
        v0++;
      } else {
        v1++;
      }
    }
    return [v0, v1];
  });
  const dp = new Array(m + 1).fill("").map(() => new Array(n + 1).fill(0));
  for (let i = 0; i < l; i++) {
    const [v0, v1] = valueList[i];
    for (let j = m; j >= v0; j--) {
      for (let k = n; k >= v1; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - v0][k - v1] + 1);
      }
    }
  }
  console.log(dp);
  return dp[m][n];
};
const strs = ["10", "0001", "111001", "1", "0"],
  m = 5,
  n = 3;

console.log(findMaxForm(strs, m, n));
