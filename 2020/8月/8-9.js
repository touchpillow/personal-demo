// var findErrorNums = function (nums) {
//   const l = nums.length;
//   const set = new Set();
//   let a = 0;
//   let sum = 0;
//   for (const n of nums) {
//     if (set.has(n)) {
//       a = n;
//     } else {
//       sum += n;
//       set.add(n);
//     }
//   }
//   return [a, ((1 + l) * l) / 2 - sum];
// };
// var findErrorNums = function (nums) {
//   let a = 0;
//   for (const n of nums) {
//     if (nums[n - 1] < 0) {
//       a = n;
//     } else {
//       nums[n - 1] *= -1;
//     }
//   }
//   const l = nums.length;
//   for (let i = 0; i < l; i++) {
//     if (nums[i] > 0) {
//       return [a, i + 1];
//     }
//   }
// };
// var makeGood = function (s) {
//   const ls = s.length;
//   if (ls < 2) return s;
//   for (let i = 0; i < ls - 1; i++) {
//     const v1 = s[i].charCodeAt();
//     const v2 = s[i + 1].charCodeAt();
//     if ((v1 > 96 && v1 - 32 === v2) || (v2 > 96 && v2 - 32 === v1)) {
//       return makeGood(s.slice(0, i) + s.slice(i + 2));
//     }
//   }
//   return s;
// };
// var a = "abBAcC";
// console.log(makeGood(a));

// var findKthBit = function (n, k) {
//   let a = "0";
//   const invert = (s) => {
//     let res = "";
//     for (const i of s) {
//       res = `${i == "0" ? "1" : "0"}${res}`;
//     }
//     return res;
//   };
//   if (n == 1) {
//     return a[k];
//   } else {
//     while (n !== 1) {
//       a = `${a}1${invert(a)}`;
//       n--;
//     }
//     return a[k];
//   }
// };
// console.log(findKthBit(3, 1));
// var maxNonOverlapping = function (nums, target) {
//   const l = nums.length;
//   if (l == 1) return nums[0] == target ? 1 : 0;
//   let count = 0;
//   nums.sort((a, b) => a - b);
//   let start = 0;
//   let end = l - 1;
//   while (start <= end) {
//     if(nums[start]<target||nums[end]>target)return count
//     if (nums[start] === target) {
//       start++;
//       count++;
//     } else if (nums[end] === target) {
//       end--;
//       count;
//     } else {
//         if(nums[start]+nums[end]>)
//     }
//   }
// };
// var minCost = function (n, cuts) {
//   cuts.sort((a, b) => a - b);
//   const l = cuts.length;
//   const nums = new Array(l);
//   for (let i = 0; i < l; i++) {
//     nums[i] = cuts[i] - cuts[i - 1] || 0;
//   }
//   for(let i=1;i<l;i++){

//   }
// };
// var a = [1, 3, 4, 5];
// console.log(minCost(7, a));
// console.log(a.sort((a, b) => a - b));
// var findTarget = function (root, k) {
//   const list = [];
//   const search = (root) => {
//     if (!root) return;
//     search(root.left);
//     list.push(root.val);
//     search(root.right);
//   };
//   search(root);
//   const l = list.length;
//   let start = 0,
//     end = l - 1;
//   while (start <= end) {
//     const sum = list[start] + list[end];
//     if (sum === k) return true;
//     if (sum > k) {
//       end--;
//     } else {
//       start++;
//     }
//   }
//   return false;
// };
// var judgeCircle = function (moves) {
//   const res = [0, 0];
//   for (const i of moves) {
//     switch (i) {
//       case "L":
//         res[0]--;
//         break;
//       case "R":
//         res[0]++;
//         break;
//       case "U":
//         res[1]++;
//         break;
//       case "D":
//         res[1]--;
//         break;
//     }
//   }
//   return !res[0] && !res[1];
// };
// var isValidBST = function (root) {
//   let pre = -Infinity;
//   let flag = false;
//   const search = (root) => {
//     if (flag) return;
//     if (!root) return;
//     search(root.left);
//     if (root.val <= pre) {
//       flag = true;
//       return;
//     }
//     pre = root.val;
//     search(root.right);
//   };
//   search(root);
//   return !flag;
// };
// var isValidBST = function (root) {
//   const isValidBSTAA = (root, min, max) => {
//     if (!root) return true;
//     if (root.val < min || root.val > max) return false;
//     return (
//       isValidBSTAA(root.left, min, root.val) &&
//       isValidBSTAA(root.right, root.val, max)
//     );
//   };
//   if (!root) return true;
//   return isValidBSTAA(root, -Infinity, Infinity);
// };
var levelOrder = function (root) {
  const res = [];
  if (!root) return res;
  const stack = [root];
  while (stack.length) {
    const temp = stack.map((item) => item.val);
    res.push(temp);
    const newStack = stack.reduce((res, item) => {
      if (item.left) res.push(item.left);
      if (item.right) res.push(item.right);
      return res;
    }, []);
    stack.splice(0, Infinity, ...newStack);
  }
  return res;
};
