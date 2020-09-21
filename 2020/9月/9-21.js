// var prefixesDivBy5 = function (A) {
//   const l = A.length;
//   A[0] += "";
//   for (let i = 1; i < l; i++) {
//     A[i] = A[i - 1] + A[i];
//   }
//   return A.map((i) => !(Number.parseInt(i, 2) % 5));
// };
// var removeOuterParentheses = function (S) {
//   const l = S.length;
//   if (l < 3) return S;
//   let left = 1;
//   let right = 0;
//   const pri=(s)=>{

//   }
//   for (let i = 1; i < l; i++) {
//     if (S[i] == "(") {
//       left++;
//     } else {
//       right++;
//     }
//     if (left == right) {
//       return S.slice(0, i + 1) + removeOuterParentheses(S.slice(i + 1));
//     }
//   }
// };
var summaryRanges = function (nums) {
  let res = [];
  let start = nums[0];
  let end = start;
  const l = nums.length;
  for (let i = 1; i < l; i++) {
    if (nums[i] - nums[i - 1] == 1) {
      end = nums[i];
    } else {
      if (start == end) {
        res.push(`${start}`);
      } else {
        res.push(`${start}->${end}`);
      }
      start = end = nums[i];
    }
  }
  if (start == end) {
    res.push(`${start}`);
  } else {
    res.push(`${start}->${end}`);
  }
  return res;
};
const a = [0, 2, 3, 4, 6, 8, 9];
console.log(summaryRanges(a));
