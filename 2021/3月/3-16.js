// var subarraysDivByK = function (A, K) {
//   const l = A.length;
//   const nums = new Array(K).fill(0);
//   let v = A[0];
//   nums[((v % K) + K) % K]++;

//   for (let i = 1; i < l; i++) {
//     v += A[i];
//     nums[((v % K) + K) % K]++;
//   }
//   let c = nums[0] + (nums[0] * (nums[0] - 1)) / 2;
//   for (let i = 1; i < K; i++) {
//     c += (nums[i] * (nums[i] - 1)) / 2;
//   }
//   return c;
// };
// const A = [-1, 2, 9],
//   K = 2;
// console.log(subarraysDivByK(A, K));
// let a = (b = 2);
// console.log(a, b);
var maxTurbulenceSize = function (arr) {
  const l = arr.length;
  let max = 0;
  let dp1 = 1;
  let dp2 = 1;
  for (let i = 1; i < l; i++) {
    if (i % 2 && arr[i] > arr[i - 1]) {
      dp1++;
      dp2 = 1;
    } else if (!(i % 2) && arr[i] < arr[i - 1]) {
      dp1++;
      dp2 = 1;
    } else if (i % 2 && arr[i] < arr[i - 1]) {
      dp2++;
      dp1 = 1;
    } else if (!(i % 2) && arr[i] > arr[i - 1]) {
      dp2++;
      dp1 = 1;
    } else {
      dp1 = 1;
      dp2 = 1;
    }
    max = Math.max(max, dp1, dp2);
  }
  return max;
};
console.log(maxTurbulenceSize([4, 8, 12, 16]));
