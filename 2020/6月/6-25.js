// var rotate = function (nums, k) {
//   let v;
//   let l = nums.length;
//   if (l < 2) return;
//   for (let i = 0; i < k % l; i++) {
//     v = nums[0];
//     for (let j = l - 1; j; j--) {
//       nums[(j + 1) % l] = nums[j];
//     }
//     nums[1] = v;
//   }
// };
// var rotate = function (nums, k) {
//   if (nums.length < 2) return;
//   const l = k % nums.length;
//   nums.splice(0, 0, ...nums.splice(nums.length - l, l));
// };

// var rotate = function (nums, k) {
//   if (nums.length < 2) return;
//   const l = nums.length;
//   const v = k % l;
//   const res = [];
//   nums.forEach((i, index) => {
//     res[(index + v) % l] = i;
//   });
//   nums.splice(0, l, ...res);
// };
// var reverseBits = function (n) {
//   const s = n.toString(2).padStart(32, "0");
//   let res = "";
//   for (let i = 0, l = s.length; i < l; i++) {
//     res = s[i] + res;
//   }
//   return parseInt(res, 2);
// };
// console.log(reverseBits(43261596));
// var hammingWeight = function (n) {
//   const s = n.toString(2);
//   let res = 0;
//   for (let i = 0, l = s.length; i < l; i++) {
//     if (s[i] === "1") res++;
//   }
//   return res;
// };

//类似背包问题

// rob(n)=Math.max(rob(n-2)+nums[n],rob(n-1))
// let map = {};
var rob = function (nums) {
  const l = nums.length;
  let map = {};
  return aa(nums, map);
};
var aa = (nums, map) => {
  if (!l) return 0;
  if (l < 3) return Math.max(...nums);
  let res;
  const l = nums.length;
  if (map[l]) {
    return map[l];
  } else {
    res = Math.max(
      rob(nums.slice(0, l - 2)) + nums[l - 1],
      rob(nums.slice(0, l - 1))
    );
    map[l] = res;
    return res;
  }
};

// var rob = function (nums) {
//   const l = nums.length;
//   if (!l) return 0;
//   let v1 = 0;
//   let v2 = nums[0];
//   let temp;
//   for (let i = 1; i < l; i++) {
//     temp = v2;
//     v2 = Math.max(v1 + nums[i], v2);
//     v1 = temp;
//   }
//   return v2;
// };
console.log(rob([2, 7, 9]));
