// var sumEvenAfterQueries = function (A, queries) {
//   const l = queries.length;
//   const res = new Array(l);
//   let sum = 0;
//   for (const n of A) {
//     if (!(n % 2)) {
//       sum += n;
//     }
//   }
//   for (let i = 0; i < l; i++) {
//     const [v, index] = queries[i];
//     const flag1 = !(A[index] % 2);
//     const flag2 = !(v % 2);
//     if (flag1 && flag2) {
//       sum += v;
//     } else if (flag1 && !flag2) {
//       sum -= A[index];
//     } else if (!flag1 && !flag2) {
//       sum += v + A[index];
//     }

//     A[index] += v;
//     res[i] = sum;
//   }
//   return res;
// };
// var addToArrayForm = function (A, K) {
//   let l1 = A.length;
//   const l2 = K.length;
//   const kL = `${K}`.split("");
//   if (l1 > l2) {
//     kL.unshift(...new Array(l1 - l2).fill(0));
//   } else if (l1 < l2) {
//     l1.unshift(...new Array(l2 - l1).fill(0));
//   }
//   l1 = A.length;
//   let v = 0;
//   for (let i = l1 - 1; i >= 0; i--) {
//     const tempv = v;
//     v = ~~((A[i] + +K[i] + v) / 10);
//     A[i] = (A[i] + +K[i] + temp) % 10;
//   }
//   if (v) A.unshift(1);
//   return A;
// };
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (t < 0 || k < 0) return false;
  const l = nums.length;
  if (l < 2) return false;
  for (let i = 0; i < Math.max(l - k, 1); i++) {
    const list = nums.slice(i, i + k + 1).sort((a, b) => a - b);
    for (let j = 0; j < k; j++) {
      if (list[j + 1] - list[j] <= t) return true;
    }
  }
  return false;
};
const a = [2147483646, 2147483647],
  b = 3,
  c = 3;
console.log(containsNearbyAlmostDuplicate(a, b, c));
