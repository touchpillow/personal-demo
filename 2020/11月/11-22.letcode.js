// var arrayStringsAreEqual = function (word1, word2) {
//   const s1 = word1.reduce((a, b) => a + b, "");
//   const s2 = word1.reduce((a, b) => a + b, "");
//   return s1 == s2;
// };
// var getSmallestString = function (n, k) {
//   let res = "";
//   while (k > n) {
//     const temp = Math.min(k - n + 1, 26);
//     res = `${String.fromCharCode(temp + 96)}${res}`;
//     k -= temp;
//     n--;
//   }
//   res = `${"a".repeat(n)}${res}`;
//   return res;
// };
// console.log(getSmallestString(5, 73));
// var waysToMakeFair = function (nums) {
//   const l = nums.length;
//   const list1 = new Array(l).fill(0); //该位置后面的奇数下标元素和
//   const list2 = new Array(l).fill(0); //该位置后面的偶数下标元素和
//   const head1 = new Array(l).fill(0); //该位置前面的奇数下标元素和
//   const head2 = new Array(l).fill(0); //该位置后面的偶数下标元素和
//   for (let i = l - 2; i >= 0; i--) {
//     if (i % 2) {
//       list1[i] = list1[i + 1];
//       list2[i] = list2[i + 1] + nums[i + 1];
//     } else {
//       list2[i] = list2[i + 1];
//       list1[i] = list1[i + 1] + nums[i + 1];
//     }
//   }
//   for (let i = 1; i < l; i++) {
//     if (i % 2) {
//       head1[i] = head1[i - 1];
//       head2[i] = head2[i - 1] + nums[i - 1];
//     } else {
//       head2[i] = head2[i - 1];
//       head1[i] = head1[i - 1] + nums[i - 1];
//     }
//   }
//   let c = 0;
//   for (let i = 0; i < l; i++) {
//     if (head1[i] + list2[i] == head2[i] + list1[i]) c++;
//   }
//   return c;
// };
// const nums = [1, 2, 3];
// console.log(waysToMakeFair(nums));
// var minimumEffort = function (tasks) {
//   const l = tasks.length;
//   tasks.sort((a, b) => {
//     const dis1 = a[1] - a[0];
//     const dis2 = b[1] - b[0];
//     if (dis1 !== dis2) return dis2 - dis1;
//     return b[1] - a[1];
//   });
//   let cur = 0;
//   for (let i = 0; i < l; i++) {
//     if (cur < tasks[i][1]) {
//       const dis = tasks[i][1] - cur;
//       cur += dis;
//     }
//     if (cur < tasks[i][0]) {
//       const dis = tasks[i][0] - cur;
//       cur += dis;
//     }
//     cur -= tasks[i][0];
//   }
//   return tasks.reduce((a, b) => a + b[0], cur);
// };
// const tasks = [
//   [1, 2],
//   [2, 4],
//   [4, 8],
// ];
// console.log(minimumEffort(tasks));
// var CheckPermutation = function (s1, s2) {
//   s1 = [...s1].sort();
//   s2 = [...s2].sort();
//   return s1.join() == s2.join();
// };
// var isUnique = function (astr) {
//   return astr.length === new Set(astr).size;
// };
var massage = function (nums) {
  const l = nums.length;
  if (!l) return 0;
  if (l == 1) return nums[0];
  const res = new Array(l).fill(0);
  res[0] = nums[0];
  res[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < l; i++) {
    res[i] = Math.max(res[i - 1], res[i - 2] + nums[i]);
  }
  return res[l - 1];
};
