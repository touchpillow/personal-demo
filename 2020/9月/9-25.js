// var lastStoneWeight = function (stones) {
//   stones.sort((a, b) => a - b);
//   while (stones.length > 1) {
//     console.log(stones);
//     const x = stones.pop();
//     const y = stones.pop();
//     if (x == y) continue;
//     const index = stones.findIndex((i) => i >= x - y);
//     stones.splice(index < 0 ? stones.length : index, 0, x - y);
//   }
//   return stones[0] || 0;
// };
// const a = [1, 1, 1, 2, 4];

// console.log(lastStoneWeight(a));
// var removeDuplicates = function (S) {
//   S = S.split("");
//   const res = [];
//   const l = S.length;
//   for (const s of S) {
//     if (res.length && res[res.length - 1] == s) {
//       res.pop();
//     } else {
//       res.push(s);
//     }
//   }
//   return res.join("");
// };
// const a = "abbaca";
// console.log(removeDuplicates(a));

// var productExceptSelf = function (nums) {
//   const l = nums.length;
//   const l1 = new Array(l);
//   l1[0] = nums[0];
//   const l2 = new Array(l);
//   l2[l - 1] = nums[l - 1];
//   for (let i = 1; i < l; i++) {
//     l1[i] = l1[i - 1] * nums[i];
//   }
//   l1.unshift(1);
//   for (let i = l - 2; i >= 0; i--) {
//     l2[i] = l2[i + 1] * nums[i];
//   }
//   l2.push(1);
//   console.log(l1, l2);
//   return nums.map((item, index) => {
//     return l1[index] * l2[index + 1];
//   });
// };
const a = [1, 2, 3, 4];
var productExceptSelf = function (nums) {
  const l = nums.length;
  let temp = 1;
  const res = new Array(1);
  for (let i = 0; i < l; i++) {
    res[i] = temp;
    temp *= nums[i];
  }
  temp = 1;
  console.log(res);
  for (let i = l - 1; i >= 0; i--) {
    res[i] *= temp;
    temp *= nums[i];
  }
  return res;
};
console.log(productExceptSelf(a));
